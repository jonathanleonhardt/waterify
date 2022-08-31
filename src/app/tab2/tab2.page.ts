import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isModalOpen = false;
  currentAlarm: NotificationConfig | null = null;

  daysOfTheWeek = ['D','S','T','Q','Q','S','S'];

  private notifications: NotificationConfig[] = [
    {
      every: 60,
      beginsAt: '06:30',
      endsAt: '22:30',
      daysWeek: ['SEG','QUA','SEX'],
      active: false
    },
    {
      every: 120,
      beginsAt: '10:00',
      endsAt: '18:00',
      daysWeek: ['SAB','DOM'],
      active: true
    }
  ];

  constructor() {}

  setOpen(isOpen, alarm) {
    this.isModalOpen = isOpen;
    if (isOpen) {
      this.currentAlarm = alarm;
    }
  }

  setCurrentAlarmStatus(alarm) {
    alarm.active = !alarm.active;
  }

  public getEveryTimeFormatted( every: number ): string {
    if ( every % 60 === 0) {
      return every / 60 + ' horas';
    } else {
      return every + ' minutos';
    }
  }

  public saveAlarm() {
    if ( this.currentAlarm === undefined || this.currentAlarm === null ) {
      //this.currentAlarm
    }
    this.notifications = [ ...this.notifications , this.currentAlarm ];
  }

}

interface NotificationConfig {
  every: number;
  beginsAt: string;
  endsAt: string;
  daysWeek: string[];
  active: boolean;
}
