
  var surfboards = [
    {brand:'Lost', width:24.6, length:5.6, volume: 30, fins:'thruster'},
    {brand:'firewrire', width:18, length:6.2, volume: 40, fins:'quad'},
    {brand:'js', width:23.2, length:6.2, volume: 27, fins:'thruster'},
    {brand:'rusty', width:20.9, length:6.0, volume: 28, fins:'quad'},
    {brand:'santacruz', width:19.2, length:6.5, volume: 33, fins:'twin'}
    
];
// post: returns all items in an array
  exports.getAll = function getAll(arrayOfObjects)
{

   return JSON.stringify(arrayOfObjects);
}

// post: returns the resqusted array item 
exports.get = function get(width)
{
    var found = surfboards.find(function(item) {
        return JSON.stringify(item.width === width);
      });
      
}

// post: delete the resquested item in an array
exports.remove = function remove(array, element)
{
   array.splice(element,1);
}

// post: adds object to the array 
exports.add = function add(array, object)
{
    array.push(object)
    //console.log(array);
}


//get(18);
var person = {brand:'pyzel', width:18.2, length:5.9, volume: 27, fins:'thruster'};
add(surfboards, person);
remove(surfboards, 4);
var test = getAll(surfboards);
console.log(test);

