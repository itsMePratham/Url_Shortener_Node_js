const URL = require("../models/url");
const shortid = require("shortid");
async function createUrl(req, res) {
  const body = req.body;
  
  if (!body.redirectUrl) {
    return res.status(400).json({
      message: "URL is required",
    });
  }

  await URL.create({
    shortId: shortid(7),
    redirectUrl: body.redirectUrl,
    visitHistory: [],
  });

  return res.redirect('/views')
}

async function getUrl(req, res) {
  const shortId = req.params.shortId;

  if (!shortId) {
    return res.status(400).json({
      message: "Short ID is required",
    });
  }
  const entry = await URL.findOneAndUpdate(
    { shortId: shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }


  );

    if (!entry) {
        return res.status(404).json({
        message: "URL not found",
        });
    }
    else {
        return res.redirect(entry.redirectUrl);
    }
}

async function getAnalytics(req, res) {
    const shortId = req.params.shortId;

    if (!shortId) {
        return res.status(400).json({
            message: "Short ID is required",
        });
    }               

    const entry = await URL.findOne
    ({ shortId: shortId });

    if (!entry) {
        return res.status(404).json({
            message: "URL not found",
        });
    }
    else {
        return res.status(200).json({
           numberOfVisits: entry.visitHistory.length,
              visitHistory: entry.visitHistory,
        });
    }
}
module.exports = {
  createUrl,
  getUrl,
  getAnalytics
};
