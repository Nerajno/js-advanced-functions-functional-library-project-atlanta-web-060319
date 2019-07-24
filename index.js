const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, action) {
          if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
              action(collection[i], i, collection)}
          }else{
            for(let key in collection){
              action(collection[key], key, collection)}
          }
        },


    map: function(collection, action) {
        let mappedArr = [];
          for(let i = 0; i < collection.length; i++){
            mappedArray.push(action(collection[i], i, collection))
          }
          return mappedArr;     
    },

    reduce: function(array, test, seed) {
      each(array(function(e, i, a){
        if(seed === undefined){
          seed = array[0];
        }else{
          seed = test(seed, e, i)
        }
      }))
      return seed

    },

    functions: function() {

    },


  //  }
   
  
})()

fi.libraryMethod()
