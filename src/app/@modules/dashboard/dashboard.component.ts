import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  
})
export class DashboardComponent {
  YEARLY: boolean = false;
  MONTHLY: boolean = false
  WEEKLY: boolean = true;
  data: any;
  options: any;
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'WEEKLY SALE',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          yAxisID: 'y',
          tension: 0.4,
          data: [28, 48, 40, 19, 76, 27, 80]
        }
      ]
    };

    this.options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    }
  }
  selectGraph(value: string) {
    switch (value) {
      case 'YEARLY':
        this.MONTHLY = false
        this.WEEKLY = false
        this.YEARLY = true
        break;
      case 'MONTHLY':
        this.MONTHLY = true
        this.WEEKLY = false
        this.YEARLY = false
        break;
      case "WEEKELY":
        this.MONTHLY = false
        this.WEEKLY = true
        this.YEARLY = false
        break;
      default:
        this.WEEKLY = true
    }
  }

}
