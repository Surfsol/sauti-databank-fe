function filterByDate(data, startDate, endDate) {
  console.log(`filterByDate incoming data`, data, startDate, endDate);
  console.log(Object.values(data)[0]);
  data = Object.values(data)[0];
  console.log("data afater set to values", data);
  startDate = startDate.replace(/-/g, "");
  endDate = endDate.replace(/-/g, "");
  console.log(data);
  const filteredData = data.filter(obj => {
    // console.log(obj)
    let objectDate = +obj.created_date.split("T")[0].replace(/-/g, "");
    //  console.log(`objectDate`, objectDate);
    return objectDate > startDate && objectDate < endDate;
  });
  console.log(`filteredData`, filteredData.length);

  return {
    sessionsData: filteredData
  };
}
export { filterByDate };
