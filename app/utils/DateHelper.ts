class DateHelper {
  date: Date;
  SEC: number = 1000;
  MIN: number = this.SEC * 60;
  HOUR: number = this.MIN * 60;
  DAY: number = this.HOUR * 24;
  WEEK: number = this.DAY * 7;
  MONTH: number = this.DAY * 30;

  constructor(date: string | number | Date) {
    this.date = new Date(date);
  }

  moduler = (time: number, subtractor: number): [number, number] => {
    const timeLeft = Number.parseInt(String(time - (time % subtractor)));
    return [time - timeLeft, timeLeft / subtractor];
  };

  calculator = (time: number): any => {
    let timeLeft = time;

    const deadline = {
      month: 0,
      week: 0,
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
    };

    if (timeLeft > this.MONTH) {
      const monthCal = this.moduler(timeLeft, this.MONTH);
      timeLeft = monthCal[0];
      deadline.month = monthCal[1];
    }

    if (timeLeft > this.DAY) {
      const dayCal = this.moduler(timeLeft, this.DAY);
      timeLeft = dayCal[0];
      deadline.day = dayCal[1];
    }

    if (timeLeft > this.HOUR) {
      const hourCal = this.moduler(timeLeft, this.HOUR);
      timeLeft = hourCal[0];
      deadline.hour = hourCal[1];
    }

    if (timeLeft > this.MIN) {
      const minCal = this.moduler(timeLeft, this.MIN);
      timeLeft = minCal[0];
      deadline.min = minCal[1];
    }

    if (timeLeft > this.SEC) {
      const secCal = this.moduler(timeLeft, this.SEC);
      timeLeft = secCal[0];
      deadline.sec = secCal[1];
    }

    // deadline.month = this.moduler(time, this.MONTH)[1];

    return deadline;
  };
}

export default DateHelper;

//
