// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// import CheckBox from "./CheckBox";

// // Data Series will need to be Sessions for chart to work

// const LineMonthly = ({ data, filter0 }) => {
//   console.log(data.sessionsData);
//   const [isQuarter, setQuarter] = useState(false);

//   console.log(isQuarter);

//   // const quarterHandle = (e) => {
//   //   e.preventDefault()
//   //   setQuarter(!isQuarter);
//   // };

//   let lineArray = data.sessionsData;

//   //Make an array of x values
//   const keysArray = Object.keys(filter0.selectableOptions);
//   // console.log(filter0);
//   // console.log(keysArray);
//   // console.log(typeof keysArray);
//   //make checkboxes for graph
//   const checkboxes = [];
//   for (let i = 0; i < keysArray.length; i++) {
//     checkboxes.push({
//       name: keysArray[i],
//       key: `checkbox[i]`,
//       label: keysArray[i]
//     });
//   }

//   //get selected Table ColumnName
//   const selectedTableColumnName = filter0.selectedTableColumnName;

//   // 1. eliminate null values
//   const lineNonNull = [];

//   for (let i = 0; i < lineArray.length; i++) {
//     //console.log(lineArray[i][selectedTableColumnName])
//     if (lineArray[i][selectedTableColumnName] !== null) {
//       lineNonNull.push(lineArray[i]);
//     }
//   }

//   // console.log(lineNonNull);

//   //2. convert date to year-month
//   lineNonNull.map(item => {
//     item["created_date"] = item.created_date.substring(0, 7);
//   });
//   //console.log(typeof lineNonNull);

//   //3. Group categories together with date
//   const reduceBy1 = (objectArray, property, property1) => {
//     return objectArray.reduce(function(total, obj) {
//       let key = obj[property] + obj[property1];
//       //combine date and cat type to make a new key

//       //make a new object if the year-mo and category not existing
//       if (!total[key]) {
//         total[key] = [];
//       }
//       //if year-mo, then push obj
//       total[key].push(obj);
//       return total;
//     }, {});
//   };
//   let groupedPeople1 = reduceBy1(
//     lineNonNull,
//     "created_date",
//     selectedTableColumnName
//   );

//   // console.log(`lineNonNull`, lineNonNull);

//   // 4. get total amount per month
//   //map through obj and get length of arrays
//   let datesAmounts = {};

//   function mapObj(mapper, o) {
//     for (let key of Object.keys(o)) {
//       datesAmounts[key] = mapper(o[key]);
//     }
//   }

//   mapObj(function length(val) {
//     return val.length;
//   }, groupedPeople1);

//   //console.log(datesAmounts);

//   //5. combine date and quantity of cat
//   let currentYM = "2017-01";
//   let dateObj = {};
//   const dateCatArray = [];
//   let objectCombined = {};
//   function combineAmountsToDates(o) {
//     for (let key of Object.keys(o)) {
//       let yearMo = key.slice(0, 7);
//       let cat = key.slice(7, 100);
//       let obj = {};
//       obj["date"] = yearMo;
//       obj[cat] = o[key];
//       // let currentObj = {};
//       // currentObj[cat] = o[key];

//       // dateObj = {};
//       // dateObj["date"] = currentYM;
//       // currentYM = yearMo;
//       //console.log(obj);
//       dateCatArray.push(obj);
//       // }
//     }
//   }

//   combineAmountsToDates(datesAmounts);
//   // console.log(datesAmounts);
//   // console.log(dateCatArray);
//   // console.log(Object.values(dateCatArray));
//   // console.log(typeof dateCatArray);

//   //6. combine together to create object for Monthly data
//   let usedDates = [];
//   let itemDate = {};
//   let allCombined = [];
//   for (let i = 0; i < dateCatArray.length; i++) {
//     let date = dateCatArray[i].date;

//     if (usedDates.includes(date)) {
//       //console.log("included");
//       itemDate = {
//         ...itemDate,
//         ...dateCatArray[i]
//       };
//       allCombined.push(itemDate);
//       //console.log(itemDate);
//     } else {
//       // allCombined.push(itemDate);
//       // console.log("not included");
//       let arraykeys = Object.keys(dateCatArray[i]);
//       let arrayValues = Object.values(dateCatArray[i]);
//       // console.log(arraykeys);
//       let newDate = {};
//       newDate["date"] = date;
//       newDate[arraykeys[1]] = arrayValues[1];
//       //console.log(newDate);
//       itemDate = newDate;
//       usedDates.push(date);
//       allCombined.push(itemDate);
//     }
//   }
//   console.log(`allCombined`, allCombined);

//   let enterDate = [];
//   const updated = [];
//   for (let i = 0; i < allCombined.length; i++) {
//     if (
//       i + 1 < allCombined.length &&
//       allCombined[i].date !== allCombined[i + 1].date
//     ) {
//       updated.push(allCombined[i]);
//     }
//   }
//   //   //console.log(updated);
//   const [checkedItems, setCheckedItems] = useState([]);

//   let display = [];
//   if (Object.entries(checkedItems).length > 0) {
//     for (let i = 0; i < Object.entries(checkedItems).length; i++) {
//       let bbb = Object.entries(checkedItems)[i];
//       if (bbb.includes(true)) {
//         display.push(bbb[0]);
//       }
//     }
//   }

//   // items to display on line chart
//   const zero = display[0];
//   const one = display[1];
//   const two = display[2];
//   const three = display[3];
//   const four = display[4];
//   const five = display[5];

//   const handleChange = event => {
//     setCheckedItems({
//       ...checkedItems,
//       [event.target.name]: event.target.checked
//     });
//   };

//   const handleReset = event => {
//     setCheckedItems({});
//   };

//   console.log(`updated`, updated);
//   //  if(isQuarter === false){
//   return (
//     <>
//       {/* <LineByQuarter
//         lineNonNull={lineNonNull}
//         selectedTableColumnName={selectedTableColumnName}
//       /> */}

//       {/* <button onClick={buttonHandle}>Display Bar Chart</button>
//       <button onClick={()=> setQuarter(!isQuarter)}>Quarterly</button>
//        */}
//       <LineChart
//         width={1000}
//         height={400}
//         data={updated}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey={zero}
//           stroke="blue"
//           dot={false}
//           // activeDot={{ r: 8 }}
//         />
//         <Line type="monotone" dataKey={one} stroke="purple" dot={false} />
//         <Line type="monotone" dataKey={two} stroke="orange" dot={false} />
//         <Line type="monotone" dataKey={three} stroke="green" dot={false} />
//         <Line type="monotone" dataKey={four} stroke="red" dot={false} />
//       </LineChart>

//       <React.Fragment>
//         {checkboxes.map(option => (
//           <label key={option.key}>
//             <CheckBox
//               name={option.name}
//               checked={checkedItems[option.name]}
//               onChange={handleChange}
//             />
//             {option.name}
//           </label>
//         ))}
//       </React.Fragment>
//     </>
//   );
// };

// export default LineMonthly;
