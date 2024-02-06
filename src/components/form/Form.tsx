import { ReactElement, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';

import { useCities } from '@/context/CitiesContext';
import { flagemojiToPNG } from '@/helpers';
import { useUrlPosition } from '@/hooks/useUrlPosition';

import Button from '../button/Button';
import ButtonBack from '../button/ButtonBack';
import Message from '../message/Message';
import Spinner from '../spinner/Spinner';
import styles from './index.module.css';

import 'react-datepicker/dist/react-datepicker.css';

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function Form() {
  const [lat, lng] = useUrlPosition();
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState('');
  const [geocodingError, setGeocodingError] = useState('');
  const [emoji, setEmoji] = useState<ReactElement | null>(null);
  const [emojiConvert, setEmojiConvert] = useState<ReactElement | null>(null);

  useEffect(() => {
    if (!lat && !lng) return;

    (async () => {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError('');
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();

        if (!data.countryCode)
          throw new Error(
            `That doesn't seem to be a cityName. Click somewhere else.`
          );
        setCityName(data.city || data.locality || '');
        setCountry(data.countryName || '');
        setEmoji(data.countryCode);
        setEmojiConvert(flagemojiToPNG(data.countryCode));
      } catch (err) {
        if (err instanceof Error) setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    })();
  }, [lat, lng]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate('/app/cities');
  };

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng) return <Message message="Start by clicking on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ''}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emojiConvert}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat={'dd/MM/yyyy'}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button submit={true} typeStyle="primary">
          Add
        </Button>
        <ButtonBack />
      </div>
    </form>
  );
}

export default Form;
