import React from 'react';
import Loading from '../loading/Loading';
import styles from './index.module.css';
import Input from '../input/Input';
import { convertToFlag } from '@/helpers';
import Weather from '../weather/Weather';

interface IState {
  location: string;
  isLoading: boolean;
  displayLocation: string;
  weather: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weathercode: number[];
  } | null;
}

class Main extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      location: 'lisbon',
      isLoading: false,
      displayLocation: '',
      weather: null,
    };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather = async () => {
    if (this.state.location.length < 2) return this.setState({ weather: null });

    try {
      this.setState({ isLoading: true });

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) throw new Error('Location not found');

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);

      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      });

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      this.setState({ weather: weatherData.daily });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // useEffect []
  componentDidMount() {
    this.setState({ location: localStorage.getItem('location') || '' });
  }
  // useEffect [location]
  componentDidUpdate(_prevProps: {}, prevState: IState) {
    if (this.state.location !== prevState.location) {
      this.fetchWeather();

      localStorage.setItem('location', this.state.location);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Input
          query={this.state.location}
          onInput={(e) => this.setState({ location: e.currentTarget.value })}
        />
        <button onClick={this.fetchWeather}>Get weather</button>

        {this.state.isLoading && <Loading />}

        {this.state.weather?.weathercode !== undefined && (
          <Weather
            weather={this.state.weather}
            location={this.state.displayLocation}
          />
        )}
      </div>
    );
  }
}

export default Main;
