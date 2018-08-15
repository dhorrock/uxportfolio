import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import ProjectInfo from '../components/ProjectInfo';
import data from '../data/data';
import Section from '../components/Section';
import DiscoverySection from '../components/DiscoverySection';
import FooterNavigation from '../components/FooterNavigator';
import ImageBar from '../components/ImageBar';
import WowVRImageBar from '../assets/WowVR/WowVR-ImageBar.png';

class WowVR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.find(item => item.title === 'WowVR'),
      currentIndex: data.findIndex(item => item.title === 'WowVR'),
    };
  }
  componentDidMount() {
    window.scrollTo({
      top: 450,
      behavior: 'auto',
    });
  }
  render() {
    return (
      <View>
        <HeaderBlurb data={this.state.data.headerBlurb} bgColor={'#D62832'} color={'#FFF'} />
        <ImageBar image={WowVRImageBar} />
        <ProjectInfo data={this.state.data.projectInfo} />
        <Section title={'DESIGN'} data={this.state.data.design} isDark={false} />
        <FooterNavigation currentIndex={this.state.currentIndex} />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;
export default WowVR;
