import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DbMetric, Metrics } from '../../core/services/metrics';
import { Subscription } from 'rxjs';
import { ChartConfiguration, ChartOptions } from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard {
  @ViewChild(BaseChartDirective) myChart!: BaseChartDirective; 
  public lineChartData: ChartConfiguration<'line'>['data'] = { datasets: [], labels: [] };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    animation: { duration: 0 }, // Disable animation for high-frequency live data
    scales: {
      x: { display: true, title: { display: true, text: 'Time' } },
      y: { display: true, title: { display: true, text: 'Value' } }
    },
    plugins: {
      legend: { display: true, position: 'top' }
    }
  };
  public lineChartType: any = 'line';

  private subscription!: Subscription;

  constructor(
    private metricsService: Metrics,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.metricsService.liveMetrics$.subscribe((metrics: DbMetric[]) => {
      this.updateChartData(metrics);
      this.cdr.markForCheck(); // Manually trigger change detection for OnPush
    });
  }

  private updateChartData(metrics: DbMetric[]): void {
    const labels = metrics.map(m => m.timestamp);
    const connections = metrics.map(m => m.activeConnections);
    const cpu = metrics.map(m => m.cpuUsage);

    this.lineChartData = {
      labels: labels,
      datasets: [
        { data: connections, label: 'Active Connections', borderColor: '#36A2EB', backgroundColor: 'rgba(54, 162, 235, 0.1)', fill: true, tension: 0.4 },
        { data: cpu, label: 'CPU Usage (%)', borderColor: '#FF6384', backgroundColor: 'rgba(255, 99, 132, 0.1)', fill: true, tension: 0.4 }
      ]
    };
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Prevent memory leaks
    }
  }

}
