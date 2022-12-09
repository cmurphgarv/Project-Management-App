module.exports = {
  
  addDays: (date, days) => {
    let dateCopy= new Date(Number(date));
    dateCopy.setDate(date.getDate() + days);
    return dateCopy
  }
};
