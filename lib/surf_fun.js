let Surfboard = require('../models/surfdb.js');


  // post: returns all items in an array
  exports.getAll = () =>
  {
    return Surfboard.find({}, (err, result) => {
        if (err) {
          return err;
        } 
        return result;
      });
  }
 
  // post: returns the resqusted array item 
  exports.get = (brand) =>
  {
    return Surfboard.findOne({brand:brand}, (err, result) =>
    {
        if (err)
        {
            return err;
        } 
          return result;
    });
  }
   
  // post: delete the resquested item in an array
   exports.delete = (brand) =>
  {
    
    return Surfboard.deleteOne({brand:brand}, (err, result) =>
    {
        if (err)
        {
            return err;
        } 
          return result;
    });
  }
   

  

 










