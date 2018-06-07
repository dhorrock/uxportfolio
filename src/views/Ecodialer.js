import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import ProjectInfo from '../components/ProjectInfo';
import data from '../data/data';
import BeelineImageBar from '../assets/Beeline/Beeline-ImageBar.svg';
import Section from '../components/Section';
import Footer from '../components/Footer';
import FooterNavigation from '../components/FooterNavigator';

class Ecodialer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.find(item => item.title === 'ecodialer'),
      currentIndex: data.findIndex(item => item.title === 'ecodialer'),
    };
  }
  render() {
    return <FooterNavigation currentIndex={this.state.currentIndex} />;
  }
}

export default Ecodialer;
