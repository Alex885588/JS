const helper=require('./helper');
module.exports=searchAndDownload;

async function searchAndDownload(name)  {
     try {
       const data = await helper.findMovie(name);
       console.log(data, "-- ID ");
          try{
            const data1=await helper.download(data);
            console.log(data1);
            return true;
          }
          catch(err1){
            throw new Error(`An error occurred while downloading the movie: ${err1}`);
          }
      } 
     catch (err) {
        console.log(err, "-- inside catch");
      }
};
searchAndDownload('The Hobbit: An Unexpected Journey');
