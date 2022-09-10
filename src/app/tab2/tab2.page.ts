import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { LocalNotifications } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  isModalOpen = false;
  currentAlarm: NotificationConfig | null = null;
  daysOfTheWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  notifications: NotificationConfig[] = [
    {
      every: 1,
      beginsAt: '06:30',
      endsAt: '22:30',
      // daysWeek: ['SEG', 'QUA', 'SEX'],
      active: true,
    },
    {
      every: 120,
      beginsAt: '10:00',
      endsAt: '18:00',
      // daysWeek: ['SAB', 'DOM'],
      active: false,
    },
  ];

  constructor() {
    this.setNotifications();
  }

  async setNotifications() {
    const programmedNotifications = [];
    let count = 1;
    this.notifications.forEach((element) => {
      if (element.active) {
        programmedNotifications.push({
          title: 'Não se esqueça de beber água',
          body: 'Este é um lembrete configurado pelo app',
          id: count++,
          schedule: { at: new Date(Date.now() + 1000 * 60 * element.every) },
        });
      }
    });
    programmedNotifications.push({
      title: 'Não se esqueça de beber água',
      body: 'Este é um lembrete configurado pelo app waterify',
      id: count++,
      schedule: {
        on: {
          hour: 8,
          minute: 0
        },
        allowWhileIdle: true
       },
    });
    await LocalNotifications.schedule({
      notifications: programmedNotifications,
    });
  }

  setOpen(isOpen, alarm) {
    this.isModalOpen = isOpen;
    if (isOpen) {
      this.currentAlarm = alarm;
    }
  }

  setCurrentAlarmStatus(alarm) {
    alarm.active = !alarm.active;
  }

  getEveryTimeFormatted(every: number): string {
    if (every % 60 === 0) {
      return every / 60 + ' horas';
    } else {
      return every + ' minutos';
    }
  }

  saveAlarm() {
    if (this.currentAlarm === undefined || this.currentAlarm === null) {
      //this.currentAlarm
    }
    this.notifications.push(this.currentAlarm);
  }
}

interface NotificationConfig {
  every: number;
  beginsAt: string;
  endsAt: string;
  active: boolean;
}
