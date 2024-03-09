import { Car } from '../../../../types';

import './UserProfile.scss';

const UserProfile = (user: Car['user']) => {
  const { profile_image, username, name } = user;

  return (
    <div className="UserProfile">
      <div className="UserProfile-imgwrapper">
        <img className="UserProfile-userimg" src={`${profile_image}.webp`} alt={username} loading="lazy" />
      </div>
      <p className="UserProfile-username">{name}</p>
    </div>
  );
};

export default UserProfile;
