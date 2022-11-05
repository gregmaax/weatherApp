import { Component, OnInit } from '@angular/core';
import { Current, Root } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }
  cityName: string = 'Toulouse';
  weatherData!: Root;


  ngOnInit(): void {
    this.weatherService.getWeatherData('Toulouse')
      .subscribe({
        next: (response) => {
          this.weatherData = response;

          console.log(response);
        }
      })
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;

          console.log(response);
        }
      })
  }

}
