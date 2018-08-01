import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
import styled from 'styled-components';
import Home from './views/Home';
import About from './views/About';
import Beeline from './views/Beeline';
import RQ from './views/Rq';
import Ecodialer from './views/Ecodialer';
import EndlessAisle from './views/EndlessAisle';
import PrequelMemes from './views/PrequelMemes';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    selected: '',
  };
  getNavigationSelection = selectionFromChild => {
    this.setState({ selected: selectionFromChild });
  };
  render() {
    return (
      <View>
        <Router>
          <div>
            <Header />
            <NavigationBar select={this.getNavigationSelection} />
            <ScrollUpButton />
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Beeline" component={Beeline} />
            <Route exact path="/RQ" component={RQ} />
            <Route exact path="/ecodialer" component={Ecodialer} />
            <Route exact path="/EndlessAisle" component={EndlessAisle} />
            <Route exact path="/PrequelMemes" component={PrequelMemes} />
            <Footer />
          </div>
        </Router>
      </View>
    );
  }
}

const View = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  display: block;
  background-color: #e8e8e8;
`;

export default App;
