import React from 'react';
import ProfileCard from './components/ProfileCard';
import TweetPost from './components/TweetPost';

class ProfilePage extends React.Component {
  render() {
    return (
    <div>
        <ProfileCard />
        <TweetPost />
    </div>
  );
  }
}

export default ProfilePage;
