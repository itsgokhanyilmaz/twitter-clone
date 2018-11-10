import React from 'react';
import ProfileCard from './components/ProfileCard';
import TweetFeed from './components/TweetFeed';
import Search from './components/Search';

class HomePage extends React.Component {
  render() {
    return <div>
      <Search />
      <ProfileCard />
      <TweetFeed />
    </div>;
  }
}

export default HomePage;
