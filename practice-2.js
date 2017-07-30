'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var result=new Array()
    var c=collectionB.toString();
      for(var i=0;i<collectionA.length;i++)
            {
              if(c.indexOf(collectionA[i].toString())>-1)
              {

                 for(var j=0;j< collectionB.length;j++) 

                 {
                        for(var k=0;k<4;k++)
						{
						
						
                     if(collectionA[i]== collectionB[j][k]) 

                     {

                        result.push(collectionA[i]);

                        break;

                     }
                        }
                 }

              }      
            }
  return result;
}
