const URL = require("../models/url");

async function showViews(req, res) {
  const AllUrls = await URL.find({});
  if (!AllUrls) {
    return res.status(404).json({
      message: "No URLs found",
    });
  }

  return res.render("showDetails", {
    urls: AllUrls,
  });
}



 function submitFormDetails(req, res) {
  
   return res.render("SubmitForm");

}
module.exports = {
  showViews,
   submitFormDetails,
};
