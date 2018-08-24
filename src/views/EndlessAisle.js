import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import ProjectInfo from '../components/ProjectInfo';
import data from '../data/data';
import EndlessAisleImageBar from '../assets/EndlessAisle/Endless-Aisle-ImageBar.jpg';
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
        <HeaderBlurb data={this.state.data.headerBlurb} bgColor={'#0094DA'} color={'white'} />
        <ImageBar image={EndlessAisleImageBar} />
        <ProjectInfo data={this.state.data.projectInfo} />
        <Section title={'KICKOFF'} data={this.state.data.kickOff} isDark />
        <Section title={'Iteration 1'} data={this.state.data.design} isDark={false} />
        <Section title={'Iteration 2'} data={this.state.data.testing} isDark />
        <Section title={'Final Iteration'} data={this.state.data.takeaway} isDark={false} />
        <Section title={'Take Away'} data={this.state.data.extra} isDark />
        <FooterNavigation currentIndex={this.state.currentIndex} />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;
export default EndlessAisle;
