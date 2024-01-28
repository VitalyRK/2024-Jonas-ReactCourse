import { IDataMovies } from '@/helpers/types';

interface IProps {
  dataMovie: IDataMovies;
  onSelected: (id: string) => void;
}

const MovieItem = ({
  dataMovie: { Title, Year, Poster, imdbID },
  onSelected,
}: IProps) => {
  return (
    <li onClick={() => onSelected(imdbID)}>
      <img
        src={Poster !== 'N/A' ? Poster : './github.svg'}
        alt={`${Title} poster`}
      />
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
