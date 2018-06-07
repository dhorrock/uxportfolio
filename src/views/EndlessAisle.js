import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import ProjectInfo from '../components/ProjectInfo';
import data from '../data/data';
import BeelineImageBar from '../assets/Beeline/Beeline-ImageBar.svg';
import Section from '../components/Section';
import FooterNavigation from '../components/FooterNavigator';
import ImageBar from '../components/ImageBar';

class EndlessAisle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.find(item => item.title === 'Endless Aisle'),
      currentIndex: data.findIndex(item => item.title === 'Endless Aisle'),
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <View>
        <HeaderBlurb data={this.state.data.headerBlurb} bgColor={'#1a1e23'} />
        <ImageBar image={BeelineImageBar} />
        <ProjectInfo data={this.state.data.projectInfo} />
        <Section title={'KICKOFF'} data={this.state.data.kickOff} isDark />
        <Section title={'DESIGN'} data={this.state.data.design} isDark={false} />
        <Section title={'TESTING'} data={this.state.data.testing} isDark />
        <Section title={'TAKEAWAY'} data={this.state.data.takeaway} isDark={false} />
        <FooterNavigation currentIndex={this.state.currentIndex} />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;
export default EndlessAisle;
