module.exports = {
  createDeadline: (date) => {
    let deadlineYear = date.getFullYear();
    let deadlineMonth = date.getMonth();
    let deadlineDay = date.getDate() + 14;

    let fullDeadline = `${deadlineMonth}/${deadlineDay}/${deadlineYear}`;
    return fullDeadline;
  },
};
