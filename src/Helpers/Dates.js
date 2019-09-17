import moment from 'moment';
import {
  DEFAULT_API_DATE_FORMAT,
  DEFAULT_API_DATETIME_FORMAT,
  SINGULAR_TIME_UNITS,
} from '../Constants';

export const getRemainingDaysCount = (date, format = DEFAULT_API_DATE_FORMAT) => {
  const now = moment();
  const momentDate = moment(date, format);

  return momentDate._isValid && momentDate.diff(now, 'days');
};

export const getTimeDifference = (datetime, format = DEFAULT_API_DATETIME_FORMAT) => {
  const diffsValues = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const diffs = Object.keys(diffsValues);
  const now = moment();
  const momentDatetime = moment(datetime, format);

  if (momentDatetime._isValid) {
    diffs.forEach(diff => {
      diffsValues[diff] = now.diff(momentDatetime, diff);
    });
  }

  const diff = diffs.find(diff => diffsValues[diff] > 0);
  const diffValue = diffsValues[diff];
  const diffSingular = SINGULAR_TIME_UNITS[diff];

  return !!diff && `${diffValue} ${diffValue > 1 ? diff : diffSingular}`;
};
