import Spinner from './Spinner';

import styles from './CityList.module.css';
import CityItem from './CityItem';
import Message from './Message';
import { useCities } from '../context/CitiesContext';

// eslint-disable-next-line react/prop-types
function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first City by clickin on the map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
