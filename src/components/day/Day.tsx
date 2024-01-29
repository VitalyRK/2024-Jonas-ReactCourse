import { formatDay, getWeatherIcon } from '@/helpers';
import React from 'react';

interface IProps {
  date: string;
  max: number;
  min: number;
  code: number;
  isToday: boolean;
}

class Day extends React.Component<IProps, {}> {
  render() {
    const { date, max, min, code, isToday } = this.props;

    return (
      <li className="day">
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? 'Today' : formatDay(date)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    );
  }
}

export default Day;
