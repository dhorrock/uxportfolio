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
import YouTube from 'react-youtube';

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
    const opts = {
      width: '100%',
      height: '500px',
      playerVars: {
        modestbranding: 0,
        showinfo: 0,
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    return (
      <View>
        <HeaderBlurb data={this.state.data.headerBlurb} bgColor={'#D62832'} color={'#FFF'} />
        <ImageBar image={WowVRImageBar} />
        <ProjectInfo data={this.state.data.projectInfo} />
        <Section title={'Testing'} data={this.state.data.design} isDark={false} />
        <Content>
          <Video>
            <YouTube videoId="CZvHAaW6qL0" opts={opts} />
          </Video>
        </Content>
        <Section title={'Design'} data={this.state.data.testing} isDark={false} />
        <FooterNavigation currentIndex={this.state.currentIndex} />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Video = styled.div`
  width: 80%;
`;

export default WowVR;
