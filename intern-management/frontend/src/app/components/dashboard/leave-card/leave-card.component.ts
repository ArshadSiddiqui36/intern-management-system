import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-leave-card',
  templateUrl: './leave-card.component.html',
  styleUrls: ['./leave-card.component.css'],
})
export class LeaveCardComponent implements OnInit {
  chart: any;
  status: any;
  status1 = ['Paid', 'Unpaid'];
  constructor() {}
  ngOnInit(): void {
    this.status = [90, 10];

    const counter = {
      id: 'counters',
      beforeDraw(chart: any, arg: any, options: any) {
        const {
          ctx,
          chartArea: { top, right, bottom, left, width, height },
        } = chart;
        ctx.save();
        ctx.fillStyle = '#43d426';
        console.log(height);
        console.log('tyjkllkjhg');
        // ctx.fillRect(width/2,(height/2)+top,10,10)
        ctx.font = '30px sans-serif';
        ctx.fillText('90%', width / 2 - 28, height / 2 + top + 2);
      },
    };
    this.chart = new Chart('canvass', {
      type: 'doughnut',
      data: {
        labels: this.status1,

        datasets: [
          {
            label: '#Chart Data',
            data: this.status,
            borderWidth: 3,
            backgroundColor: ['#43d426', 'rgb(255, 99, 132)'],
            hoverOffset: 2,
          },
        ],
      },
      options: {},
      plugins: [counter],
    });
  }
}
