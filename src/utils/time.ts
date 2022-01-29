const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const fillTimeWithZero = (time: number): string => {
  return time < 10 ? `0${time}` : time.toString();
};

const getHourAndMinutesByDate = (date: Date): string => {
  return `${fillTimeWithZero(date.getHours())}:${fillTimeWithZero(date.getMinutes())}`;
}

export const getHourAndMinutesByUNIX = (unixTime: number): string => {
  const date = new Date(unixTime * 1000);
  return getHourAndMinutesByDate(date);
};

export const getFullDateByUNIX = (unixTime: number): string => {
  const date = new Date(unixTime * 1000);
  return `${date.getDate()} ${months[date.getMonth()]} ${getHourAndMinutesByDate(date)}`;
};
