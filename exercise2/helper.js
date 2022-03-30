//const fs=require('fs');
const js= require('./movie_dataset.json');
const l = require('lodash');

module.exports={findMovie,download};

async function findMovie(movieName){
    let id=-1;
    if(movieName==="") {
        throw new Error('Invalid movie name provided.');
    }
    const ret=l.find(js.movies, function(item){
        if(item.title.toUpperCase().includes(movieName.toUpperCase())){
           id=item.id;
           return item;
        }
    })
   if(id==-1){
       throw new Error("No movie found.");
   }
   else{
       return Promise.resolve(ret.id);
   }
}
async function download(movieID){
    if(!movieID){
        throw new Error('No movie to download!');
    }
    if(movieID<=0 && movieID!=-1){
        throw new Error('Invalid movie ID!');
    }
    let ret={
        success:true,
        message: 'Successfully downloaded!'
    }
    await new Promise((resolve)=>{setTimeout(resolve,3000);}) 
    return ret; 
         
}
// const main = async () => {
//     try {
//       const data = await download(10);
//       console.log(data, "-- Maximum ");
//     } catch (err) {
//       console.log(err, "-- inside catch");
//     }
//   };
// main();
