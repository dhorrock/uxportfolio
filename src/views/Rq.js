import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import ProjectInfo from '../components/ProjectInfo';
import data from '../data/data';
import Section from '../components/Section';
import DiscoverySection from '../components/DiscoverySection';
import FooterNavigation from '../components/FooterNavigator';
import ImageBar from '../components/ImageBar';
import RqImageBar from '../assets/Rq/Rq-ImageBar.svg';

class RQ extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.find(item => item.title === 'RQ'),
      currentIndex: data.findIndex(item => item.title === 'RQ'),
    };
  }
  componentDidMount() {
    window.scrollTo({
      top: 450,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <View>
        <HeaderBlurb data={this.state.data.headerBlurb} bgColor={'#001e56'} />
        <ImageBar image={RqImageBar} />
        <ProjectInfo data={this.state.data.projectInfo} />
        <Section title={'KICKOFF'} data={this.state.data.kickOff} isDark />
        <DiscoverySection data={this.state.data.discovery} isDark={false} />
        <Section title={'DESIGN'} data={this.state.data.design} isDark />
        <Section title={'BETA & TESTING'} data={this.state.data.testing} isDark={false} />
        <Section title={'TAKEAWAY'} data={this.state.data.takeaway} isDark />
        <FooterNavigation currentIndex={this.state.currentIndex} />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;
export default RQ;
