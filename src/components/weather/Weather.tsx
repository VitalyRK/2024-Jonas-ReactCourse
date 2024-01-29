import React from 'react';
import Day from '../day/Day';

interface IProps {
  location: string;
  weather: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weathercode: number[];
  };
}

class Weather extends React.Component<IProps> {
  componentWillUnmount() {
    console.log('Weather will unmount');
  }

  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, i) => {
            if (date !== undefined) {
              return (
                <Day
                  date={date !== undefined ? date : ''}
                  max={max !== undefined ? max[i] : 0}
                  min={min !== undefined ? min[i] : 0}
                  code={codes !== undefined ? codes[i] : 0}
                  key={date}
                  isToday={i === 0}
                />
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Weather;
