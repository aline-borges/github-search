import React from 'react';
import Template from '../../templates/profile/Template';

const Profile = (props) => {
  console.log(props);
  return(
    <>
      <Template data={props.location.state} />
    </>
  );
}

export default Profile;
