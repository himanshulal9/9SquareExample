import React from 'react';
import { useStyles } from './CalendarStyle';

function Calendar({ date }) {
  const styles = useStyles();
  console.log('style ===>', styles);
  const year = date.getFullYear();
  const month = date.getMonth();

  // Calculate the number of days in the month
  const numDaysInMonth = new Date(year, month + 1, 0).getDate();

  // Calculate the day of the week the month starts on (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Create an array of calendar dates for the month
  const calendarDates = Array(numDaysInMonth)
    .fill(0)
    .map((_, index) => new Date(year, month, index + 1));

  // Create an array of blank dates to fill in before the first day of the month
  const blankDatesBefore = Array(firstDayOfMonth).fill(null);

  // Create an array of blank dates to fill in after the last day of the month
  const blankDatesAfter = Array(
    7 - ((firstDayOfMonth + numDaysInMonth) % 7)
  ).fill(null);

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.month}>
        {date.toLocaleString('default', { month: 'long' })} {year}
      </h5>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {[...blankDatesBefore, ...calendarDates, ...blankDatesAfter]
            .reduce((rows, date, index) => {
              if (index % 7 === 0) {
                rows.push([]);
              }
              rows[rows.length - 1].push(date);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((date, columnIndex) => {
                  if (date === null) {
                    return <td key={columnIndex}></td>;
                  }
                  const isToday =
                    date.toDateString() === new Date().toDateString();
                  const isHighlighted =
                    date.toDateString() ===
                    new Date(year, month, date.getDate()).toDateString();
                  return (
                    <td
                      key={columnIndex}
                      className={
                        isToday
                          ? styles.today
                          : isHighlighted
                          ? styles.highlighted
                          : null
                      }
                    >
                      {date.getDate()}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
