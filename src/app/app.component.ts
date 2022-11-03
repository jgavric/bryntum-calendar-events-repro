import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BryntumCalendarComponent, BryntumProjectModelComponent } from '@bryntum/calendar-angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('calendar') calendarComponent!: BryntumCalendarComponent;
  @ViewChild('project') projectComponent!: BryntumProjectModelComponent;

  private dataSubject = new BehaviorSubject<any>([]);
  public dataValue = this.dataSubject.value;
  public step = new Date();

  resources = [
    {
      id: 1,
      name: 'Default Calendar',
      eventColor: 'green',
    },
  ];

  ngAfterViewInit(): void {
    /**
     * Does not fire when clicked on day number when the current mode is 'week' or 'month'.
     */
    this.calendarComponent.instance.addListener('dayNumberClick', (event: any) => {
      console.warn('dayNumberClick');
      alert('dayNumberClick');
      console.warn(event);
    });

    /**
     * Works as expected (fires when clicked on week number while current mode is 'month' or year'. )
     */
    this.calendarComponent.instance.addListener('weekNumberClick', (event: any) => {
      console.warn('weekNumberClick');
      alert('weekNumberClick');
      console.warn(event);
    });

    /**
     * Does not fire when clicked on month name while current mode is 'year'.
     */
    this.calendarComponent.instance.addListener('monthNameClick', (event: any) => {
      console.warn('monthNameClick');
      alert('monthNameClick');
      console.warn(event);
    });
  }
}
