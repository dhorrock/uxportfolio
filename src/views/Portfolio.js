import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import ProjectInfo from '../components/ProjectInfo';
import data from '../data/data';
import Section from '../components/Section';
import FooterNavigation from '../components/FooterNavigator';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.find(item => item.title === 'Portfolio'),
      currentIndex: data.findIndex(item => item.title === 'Portfolio'),
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <View>
        <HeaderBlurb data={this.state.data.headerBlurb} bgColor={'#333'} color={'#FFF'} />
        <ProjectInfo data={this.state.data.projectInfo} />
        <Section title={'Notes'} data={this.state.data.design} isDark={true} />
        <FooterNavigation currentIndex={this.state.currentIndex} />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;

export default Portfolio;
