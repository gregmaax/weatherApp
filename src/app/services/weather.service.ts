import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Current, Root } from '../models/weather.model';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<Root> {
    return this.http.get<Root>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.xRapidAPIHostHeaderName, environment.xRapidAPIHostHeaderValue)
        .set(environment.xRapidAPIKeyHeaderName, environment.xRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('mode', 'json')
    });
  }
}
