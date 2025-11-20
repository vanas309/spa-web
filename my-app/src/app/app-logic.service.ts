import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root'
})
export class AppLogicService {

  constructor(
    private dataService: DataService,
    private analyticsService: AnalyticsService
  ) {}

  getDataAndLog() {
    const data = this.dataService.getData();
    this.analyticsService.logEvent(`Data retrieved: ${data.length} items`);
    return data;
  }
}
