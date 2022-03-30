  async function asyncCalulatePercentage(total,value) {
    if (typeof total !== 'number' || total <= 0){
        throw new Error('Total shuld be a positive number!');
    } 
    if (typeof value !== 'number' || value <0){
        throw new Error('Value should be a positive number');
    }
     return (value * 100) / total;
}
//from pss
const main = async () => {
    try {
      const data = await asyncCalulatePercentage(6,8);
      console.log(data, "-- Answer");
    } catch (err) {
      console.log(err, "-- inside catch");
    }
  };
main();