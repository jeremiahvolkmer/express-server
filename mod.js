
let surfboards = 
[
{brand:'lost', width:24.6, length:5.6, volume: 30, fins:'thruster'},
{brand:'firewire', width:18 , length:6.2, volume: 40, fins:'quad'},
{brand:'js', width:23.2, length:6.2, volume: 27, fins:'thruster'},
{brand:'rusty', width:20.9, length:6.0, volume: 28, fins:'quad'},
{brand:'santacruz', width:19.2, length:6.5, volume: 33, fins:'twin'}
];

  // post: returns all items in an array
  exports.getAll = () =>
  {
    return surfboards;
  }
 
  // post: returns the resqusted array item 
  exports.get = (brand) =>
  {
    let found = surfboards.find(function(obj)
    {
    return obj.brand === brand;
    });
    
    return found;
  }
   
  // post: delete the resquested item in an array
   exports.delete = (brand) =>
  {
    let found = surfboards.findIndex(function(obj)
        {
        return obj.brand === brand;
        });
    
    if(!(found === -1))
    {
      surfboards.splice(found,1);
      return true;
    }
    
    else{return false}
    
    
  }

  

 










