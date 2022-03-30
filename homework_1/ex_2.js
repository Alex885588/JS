function getArrayMax(arr){
    return new Promise( (resolve,reject)=>{
        if (!Array.isArray(arr)) {
            return reject('The input should be an array!');
        }
        let maxElement = arr[0];
        for (const element of arr) {
            if (typeof element !== 'number') {
                return reject('All the elements of the array should be numbers!');
            }
            if (element > maxElement) {
                maxElement = element;
            }
        }
        setTimeout(()=>{
            resolve(maxElement);
        },1000);
    })
}
//TESTING
const arr=[7,50,4,2];
getArrayMax(arr).then((res)=>{
    console.log('Maximum element of our array is ',res);
    return res;
}).catch((err)=>{
    console.log(err);
})