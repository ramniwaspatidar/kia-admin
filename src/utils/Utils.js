import moment from "moment";

export const getDateFromTimestamp = (date) => {
  const dateTime = moment.unix(date).format("YYYY-MM-DD HH:mm:ss");

  return dateTime;
};
