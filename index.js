function get_date(days) {
  const addDays = require("date-fns/addDays");
  let date = addDays(new Date(2020, 8, 22), days);
  let new_date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  return new_date;
}
module.exports = get_date;
console.log(get_date(3));
