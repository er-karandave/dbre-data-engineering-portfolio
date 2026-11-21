import { Injectable } from '@angular/core';
import { interval, map, Observable, shareReplay } from 'rxjs';

export interface DbMetric {
  timestamp: string;
  activeConnections: number;
  cpuUsage: number;
  replicationLagMs: number;
}


@Injectable({
  providedIn: 'root',
})
export class Metrics {
  
  public liveMetrics$: Observable<DbMetric[]> = interval(1500).pipe(
    map((_, index) => {
      // Generate realistic fluctuating DB metrics
      return Array.from({ length: 20 }, (_, i) => ({
        timestamp: new Date(Date.now() - (20 - i) * 1500).toLocaleTimeString(),
        activeConnections: Math.floor(Math.random() * (150 - 50) + 50),
        cpuUsage: Math.floor(Math.random() * (80 - 20) + 20),
        replicationLagMs: Math.floor(Math.random() * 50)
      }));
    }),
    shareReplay(1) // Multicasts the stream to multiple chart components efficiently
  );


}
