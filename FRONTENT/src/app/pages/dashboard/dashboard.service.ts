import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { DashBoardModel } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  BaseUrl = "https://localhost:5001"
  // Post-Test
  postcurrent(data: any): Observable<Array<DashBoardModel>> {
    return this.http.post<Array<DashBoardModel>>('https://localhost:5001/dtsu666', data);
  }




  timedaya = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss")
  timedayb = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss")
  timeweek = moment().endOf('day').subtract(7, 'day').format("YYYY-MM-DDTHH:mm:ss")
  timemonth = moment().endOf('day').subtract(30, 'day').format("YYYY-MM-DDTHH:mm:ss")


  constructor(private http: HttpClient) { }


  GetTimeday() {
    return this.http.get<Array<DashBoardModel>>(this.BaseUrl + '/dtsu666?&Fields=Ua&start=' + this.timedaya + '&end=' + this.timedayb)
  }
  GetTimeweek() {
    return this.http.get(this.BaseUrl + '/dtsu666?&Fields=Hz&start=' + this.timeweek + '&end=' + this.timedayb)
  }
  GetTimemonth() {
    return this.http.get(this.BaseUrl + '/dtsu666?start=' + this.timemonth + '&end=' + this.timedayb)
  }
}

