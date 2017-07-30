'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var result=new Array()
      for(var i=0;i<collectionA.length;i++)
            {
              if(c.indexOf(collectionA[i].toString())>-1)
              {

                 for(var j in objectB)

                 {

                     if(collectionA[i]== objectB[j]) 

                     {

                        result.push(collectionA[i]);

                        break;

                     }

                 }

              }      
            }
  return result;
}
