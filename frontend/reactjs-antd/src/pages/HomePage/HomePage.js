import React from 'react';
import ProfileCard from './components/ProfileCard';
import TweetFeed from './components/TweetFeed';

class HomePage extends React.Component {
  render() {
    return <div>
      <ProfileCard />
      <TweetFeed />
    </div>;
  }
}

export default HomePage;
