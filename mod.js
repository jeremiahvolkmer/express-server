
let surfboards = 
[
{brand:'lost', width:24.6, length:5.6, volume: 30, fins:'thruster'},
{brand:'firewire', width:18 , length:6.2, volume: 40, fins:'quad'},
{brand:'js', width:23.2, length:6.2, volume: 27, fins:'thruster'},
{brand:'rusty', width:20.9, length:6.0, volume: 28, fins:'quad'},
{brand:'santacruz', width:19.2, length:6.5, volume: 33, fins:'twin'}
];

  // post: returns all items in an array
  exports.getAll = function()
  {
    return surfboards;
  }

  // post: returns the resqusted array item 
  exports.get = function(brand)
  {
    let found = surfboards.find(function(obj)
    {
    return obj.brand === brand;
    });
    console.log(found);
    return found;
  }

  // post: delete the resquested item in an array
  exports.delete  = function(element)
  {
    surfboards.splice(element,1);
  }

 










