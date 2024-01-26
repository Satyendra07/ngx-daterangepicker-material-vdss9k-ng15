import { Component } from '@angular/core';
import { Moment } from 'moment';
import moment from 'moment';
import { LocaleConfig } from 'ngx-daterangepicker-material-angularv15';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  moment = moment;
  calendarLocale: LocaleConfig;
  ranges: any;
  calendarPlaceholder: string;
  selectedRange: null;
  minDate: Moment;
  maxDate: Moment;

  constructor() {
    this.calendarLocale = {
      customRangeLabel: 'Pick a date...',
      applyLabel: 'Apply',
      clearLabel: 'Clear',
      format: 'DD/MM/YYYY',
      daysOfWeek: ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'],
      monthNames: [
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
      ],
      firstDay: 1,
    };

    // this.ranges = {
    //   'Current day': [moment(), moment()],
    //   'Current week': [moment().startOf('isoWeek'), moment().endOf('isoWeek')],
    //   'Next 2 days': [moment().add(1, 'days'), moment().add(2, 'days')],
    //   'Next 3 days': [moment().add(1, 'days'), moment().add(3, 'days')],
    //   'Next weekend': [this.getNextSaturday(), this.getNextSunday()],
    // };

    this.calendarPlaceholder = 'All';

    this.minDate = moment();
    //this.maxDate = moment().clone().add(1, 'years');
  }

  // private getNextSaturday() {
  //   const dayINeed = 1; // for Saturday
  //   const today = moment().isoWeekday();
  //   console.log('today', today);
  //   if (today <= dayINeed) {
  //     return moment().isoWeekday(dayINeed);
  //   } else {
  //     return moment().add(0, 'weeks').isoWeekday(dayINeed);
  //   }
  // }

  // private getNextSunday() {
  //   const dayINeed = 7; // for Sunday
  //   const today = moment().isoWeekday();
  //   if (today <= dayINeed) {
  //     return moment().isoWeekday(dayINeed);
  //   } else {
  //     return moment().add(1, 'weeks').isoWeekday(dayINeed);
  //   }
  // }

  startDateChanged(event: any) {
    event.startDate.isoWeekday(1);
  }

  endDateChanged(event: any) {
    event.endDate.add(1, 'weeks').isoWeekday(0);
  }

  change(event) {
    console.log('change', event);
  }
}
