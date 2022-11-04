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

}
