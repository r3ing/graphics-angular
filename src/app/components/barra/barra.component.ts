import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // public barChartLabels: Array<any> = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels: Array<any> = ['Aprobadas'];
  public barChartType: String = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 100, 27, 90], label: 'Series B' },
    { data: [20, 40, 40, 19, 80, 20, 90], label: 'Series D' },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series E' },
    { data: [28, 48, 40, 19, 100, 27, 90], label: 'Series F' },
    { data: [20, 40, 40, 19, 80, 20, 90], label: 'Series G' }
  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const data1 = [
      Math.round(Math.random() * 100),
      50,
      80,
      (Math.random() * 100),
      50,
      (Math.random() * 100),
      40];
      const data2 = [
        Math.round(Math.random() * 100),
        54,
        84,
        (Math.random() * 100),
        54,
        (Math.random() * 100),
        44];
    this.barChartData[0].data = data;
    this.barChartData[1].data = data1;
    this.barChartData[2].data = data2;
  }

}
