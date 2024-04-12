//import db

module.exports.getAll = async (req, res) => {
  try {
    const data = []; // get liste of scrore
    res.status(200).json({ listOfScroring: data });
  } catch (err) {
    res.status(500).json({ err });
  }
};
