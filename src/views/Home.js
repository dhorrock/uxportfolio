import React from 'react';
import Portfolio from '../components/Portfolio';

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <Portfolio />;
  }
}

export default Home;
