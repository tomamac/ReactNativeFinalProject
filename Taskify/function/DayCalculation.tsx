import moment from "moment";

export function DayCalculation(selectedDate: string, today: string): string {
  const now = moment();
  const selected = moment(selectedDate);

  // Difference in weeks, months, and years
  const weekDiff = selected.week() - now.week();
  const monthDiff = selected.month() - now.month();
  const yearDiff = selected.year() - now.year();

  // Today
  if (selected.isSame(now, "day")) {
    return `${now.format("MMM, ")}Today`;
  }

  // Week calculations (only for the same year)
  if (yearDiff === 0 && monthDiff === 0) {
    if (weekDiff === -1) {
      return `${selected.format("MMM, ")}Last ${selected.format("ddd")}`;
    }
    if (weekDiff === -2) {
      return `${selected.format("MMM, ")}2 Weeks Ago`;
    }
    if (weekDiff === 1) {
      return `${selected.format("MMM, ")}Next ${selected.format("ddd")}`;
    }
    if (weekDiff === 2) {
      return `${selected.format("MMM, ")}Next 2 Weeks`;
    }
  }

  // Month calculations (only for the same year)
  if (yearDiff === 0) {
    if (monthDiff < 0 && monthDiff >= -11) {
      return `${selected.format("MMM, ")}Last ${
        Math.abs(monthDiff) > 1 ? Math.abs(monthDiff) + " Months" : "Month"
      }`;
    }
    if (monthDiff > 0 && monthDiff <= 11) {
      return `${selected.format("MMM, ")}Next ${
        Math.abs(monthDiff) > 1 ? Math.abs(monthDiff) + " Months" : "Month"
      }`;
    }
  }

  // Year calculations
  if (yearDiff < 0) {
    return `${selected.format("MMM YYYY, ")}Last ${
      Math.abs(yearDiff) > 1 ? Math.abs(yearDiff) + " Years" : "Year"
    } `;
  }
  if (yearDiff > 0) {
    return `${selected.format("MMM YYYY, ")}Next ${
      Math.abs(yearDiff) > 1 ? Math.abs(yearDiff) + " Years" : "Year"
    }`;
  }

  // Default: Just return the formatted date
  return selected.format("MMM, ddd");
}
