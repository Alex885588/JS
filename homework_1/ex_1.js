function calculatePercentage(total,value) {
    return new Promise((resolve, reject)=>{
        if (typeof total !== 'number' || total <= 0){
            return reject('Total shuld be a positive number!');
        } 
        if (typeof value !== 'number' || value <0){
            return  reject('Value should be a positive number');
        }
        resolve((value * 100) / total);
    });
}
calculatePercentage(6,8).
    then((res)=>{
        console.log('Answer: ',res);
    }).
    catch( (err)=>{
        console.log(err)
    });



