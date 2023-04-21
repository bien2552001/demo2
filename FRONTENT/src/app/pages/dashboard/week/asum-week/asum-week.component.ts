import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { DashboardService } from '../../dashboard.service';
export type ChartOptions1 = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  stroke: ApexStroke | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
};
@Component({
  selector: 'app-asum-week',
  templateUrl: './asum-week.component.html',
  styleUrls: ['./asum-week.component.css']
})
export class AsumWeekComponent implements OnInit {

  public data: any;
  private interval: any;
  constructor(private http: DashboardService) { }
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions1> | any;


  ngOnInit(): void {
    this.getweek();
    this.startReload();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startReload(): void {
    this.interval = setInterval(() => {
      this.getweek();
    }, 100000); // 10 seconds
  }

  async getweek() {
    //--------------------------------------Today---------------------------------
    await this.http.GetTimeweek().subscribe(
      result => {
        this.data = result;
        let arr2 = [];
        for (let i = 0; i < this.data.length; i++) {
          arr2.push(this.data[i].Hz);
        }
        let arr4 = [];
        for (let i = 0; i < this.data.length; i++) {
          arr4.push(this.data[i].Date);
        }

        this.chartOptions = {
          series: [
            {
              name: "A_sum",
              data: arr2.map(num => num.toFixed(2))
            }
          ],
          chart: {
            height: 400,
            type: 'line',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 10,
              blur: 5,
              opacity: 0.2
            },
            toolbar: {
              show: true
            }
          },
          colors: ["#F08080", "#80DAEC"],
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth',
            width: 2
          },
          title: {
            text: 'TONG DIEN NANG TIEU THU TUAN',
            align: 'left'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 4,
            hover: {
              size: 9
            }
          },
          xaxis: {
            labels: {
              formatter: function (val: any) {
                return moment(val).format("DD-MM-yyyy")
              },
            },
            categories: arr4
          },
          //tooltip: {
          //  x: {
          //    format: "yyyy-MM-DD HH:mm:ss A",

          //  }
          //},
        };

      }


    )
  }

}
