const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const resetDaysAndMonth = (
  date: number,
  month: number,
  counter: number,
  resetValue: number
) => {
  date -= resetValue;
  month += 1;
  counter = 0;
};

const resetOrNot = (
  prevDate: number,
  prevDateValue: number,
  date: number,
  month: number,
  counter: number
) => {
  prevDate === prevDateValue
    ? resetDaysAndMonth(date, month, counter, prevDateValue)
    : (date = date);
};

const isMonth31 = (month: number) => {
  if (
    month === 0 ||
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 7 ||
    month === 9 ||
    month === 11
  ) {
    return true;
  }
  return false;
};

export const getWeeklyDate = () => {
  const currentDay = new Date().getDay();
  const week = ["Завтра"].concat(
    days.slice(currentDay + 2, 7),
    days.slice(0, currentDay + 1)
  );
  let counter = 0;
  let prevDate = 0;
  return week.map((day) => {
    let currentDate = new Date().getDate() + counter;
    let currentMonth = new Date().getMonth();
    isMonth31(currentMonth)
      ? resetOrNot(prevDate, 31, currentDate, currentMonth, counter)
      : resetOrNot(prevDate, 30, currentDate, currentMonth, counter);
    prevDate = currentDate;
    counter++;
    return {
      day: day,
      date: `${currentDate} ${months[currentMonth]}`,
    };
  });
};
