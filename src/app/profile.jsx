import React from 'react';
import ReactDOM from 'react-dom';
import Ring from './ring.jsx';

class Profile extends React.Component {
    render() {
      return <div className="profile">
        Profile
        <Ring src="placeholder.jpg"></Ring>
      </div>
    }
};

export default Profile;