import { set } from "react-ga";

function seperateMultiples(data) {
  let allData = data["sessionsData"];
  let keys = Object.keys(allData[0]);
  console.log(keys);
  keys.forEach(key => {
    allData.map(obj => {
      //let datePair = {'created_date':obj['created_date']}
      //console.log(datePair)
      if (obj[key] && obj[key].includes(",")) {
        console.log(obj[key]);
        //puts into an array
        let split = obj[key].split(",");
        console.log(split);
        //remove first
        split.shift();
        console.log(split);
        //keep unique items
        let unique = [...new Set(unique)];
        console.log(unique);
        // obj[key] = split[0];
        split.forEach(value => {
          // console.log({'created_date':obj['created_date'], [key]:value})
        });
      }
    });
  });
  console.log(allData);
}
export { seperateMultiples };
