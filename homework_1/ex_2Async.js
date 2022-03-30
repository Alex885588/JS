async function asyncGetArrayMax(arr){
        if (!Array.isArray(arr)) {
            throw new Error('The input should be an array!');
        }
        let maxElement = arr[0];
        for (const element of arr) {
            if (typeof element !== 'number') {
                throw new Error('All the elements of the array should be numbers!');
            }
            if (element > maxElement) {
                maxElement = element;
            }
        }
          await new Promise((resolve)=>{setTimeout(resolve,1000);})
      return maxElement;
}
//testing,PSS
const arr=[7,50,4,2];
const main = async () => {
    try {
      const data = await asyncGetArrayMax(arr);
      console.log(data, "-- Maximum ");
    } catch (err) {
      console.log(err, "-- inside catch");
    }
  };
main();
