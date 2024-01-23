import { IDataMovies } from '@/helpers/types';

interface IProps {
  dataMovie: IDataMovies;
}

const MovieItem = ({ dataMovie: { Title, Year, Poster } }: IProps) => {
  return (
    <li>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{Year}</span>
        </p>
      </div>
    </li>
  );
};

export default MovieItem;
