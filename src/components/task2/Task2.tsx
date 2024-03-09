import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import CarResult from './components/CarResult';
import NoResults from './components/NoResults';
import { fetchTaggedCars } from './utils/fetchTaggedCars';

import { Car } from '../../types';

import './Task2.scss';

const Task2: React.FC = () => {
  const [cars, setCars] = useState<Car[]>(undefined);

  const [searchParams] = useSearchParams();

  const tag = searchParams.get('tag');

  useEffect(() => {
    const fetchCars = async () => {
      const cars = await fetchTaggedCars(tag);

      setCars(cars);
    };

    fetchCars();
  }, [searchParams, tag]);

  return (
    <div className="Task2">
      {tag ? <h1 className="Task2-heading">{tag}</h1> : null}

      {cars?.length ? (
        <div className="Task2-container">
          {cars.map((car) => (
            <CarResult {...car} key={car.id} />
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default Task2;
