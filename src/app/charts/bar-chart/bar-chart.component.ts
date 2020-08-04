import { Component, OnInit } from '@angular/core';
const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 87, 52, 97, 109, 54, 30], label: 'Fall Sales' },
  { data: [35, 57, 72, 47, 140, 24, 130], label: 'Summer Sales' }
];
const SAMPLE_BARCHART_LABELS: any = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {
  }

}
