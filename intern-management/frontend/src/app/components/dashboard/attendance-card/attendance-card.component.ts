import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-attendance-card',
  templateUrl: './attendance-card.component.html',
  styleUrls: ['./attendance-card.component.css'],
})
export class AttendanceCardComponent implements OnInit {
  constructor(private service: MainService) {
    Chart.register(...registerables);
  }
  chart: any;
  index: any;
  status: any = [];
  status1 = ['Present', 'Absent'];

  ngOnInit(): void {
    this.service.getattendence().subscribe(
      (result: any) => {
        // Swal.fire("leave Applied  Sucessfully!")
        console.log(result);
        this.index = result;

        //console.log(this.status)
        this.status = [90, 10];

        const counter = {
          id: 'counter',
          beforeDraw(chart: any, arg: any, options: any) {
            const {
              ctx,
              chartArea: { top, right, bottom, left, width, height },
            } = chart;
            ctx.save();
            ctx.fillStyle = '#36a2eb';
            console.log(height);
            console.log('tyjkllkjhg');
            // ctx.fillRect(width / 2, height / 2 + top, 10, 10);
            ctx.font = '30px sans-serif';
            ctx.fillText('90%', width / 2 - 28, height / 2 + top + 4);
          },
        };
        this.chart = new Chart('canvas', {
          type: 'doughnut',
          data: {
            labels: this.status1,

            datasets: [
              {
                label: '#Chart Data',
                data: this.status,
                borderWidth: 3,
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
                hoverOffset: 2,
              },
            ],
          },
          options: {},
          plugins: [counter],
        });
      },
      (error: any) => {
        alert('server is down Please try again later');
      }
    );
  }

  changeTime(value: any) {
    // new Date("2021-12-06T10:06").getDate()
    console.log('fffffff');
    console.log(value);
    if (value != null)
      return new Date(value).getHours() + ':' + new Date(value).getMinutes();
    else return 'not found';
  }
  totalHours(value1: any, value2: any) {
    if (value2 != null)
      return new Date(value1).getHours() + new Date(value2).getHours();
    else return 'not found';
  }
}
