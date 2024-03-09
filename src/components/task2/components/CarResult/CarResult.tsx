import UserProfile from '../UserProfile';

import { Car } from '../../../../types';

import './CarResult.scss';

const CarResult = (car: Car) => {
  const { alt_description, description, likes, user, url, id } = car;

  return (
    <div className="CarResult" key={id}>
      <div className="CarResult-imgwrapper">
        <img className="CarResult-carimg" src={`${url}.webp`} alt={alt_description} loading="lazy" />
        <span className="CarResult-carlikes">{likes}: likes</span>
      </div>
      <div className="CarResult-carcontent">
        {description ? <p className="CarResult-cardescription">{description}</p> : null}
        <UserProfile {...user} />
      </div>
    </div>
  );
};

export default CarResult;
