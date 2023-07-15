const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page, limit, favorite } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find(
    favorite ? { owner, favorite } : { owner },
    "",
    { skip, limit }
  ).populate("owner", "email subscription");
  res.status(200).json(result);
};

module.exports = getAll;