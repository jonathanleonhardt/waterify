import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isModalOpen = false;
  currentAlarm: NotificationConfig | null = null;

  private notifications: NotificationConfig[] = [
    {
      every: 60,
      beginsAt: '06:30',
      endsAt: '22:30',
      daysWeek: ['MON','THU','SAT'],
      active: true
    },
    {
      every: 120,
      beginsAt: '10:00',
      endsAt: '18:00',
      daysWeek: ['SUN'],
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

}

interface NotificationConfig {
  every: number;
  beginsAt: string;
  endsAt: string;
  daysWeek: string[],
  active: boolean
}