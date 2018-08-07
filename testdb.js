var Surfboard = require("./models/mod2");

// return all records
Surfboard.find({}, (err, items) => {
  if (err) return next(err);
  console.log(items.length);
  // other code here
});