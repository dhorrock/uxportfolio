import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import ProjectInfo from '../components/ProjectInfo';
import data from '../data/data';
import Section from '../components/Section';
import DiscoverySection from '../components/DiscoverySection';
import FooterNavigation from '../components/FooterNavigator';
import ImageBar from '../components/ImageBar';
import PrequelMemesImageBar from '../assets/PrequelMemes/PrequelMemes-ImageBar-02.svg';

class PrequelMemes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.find(item => item.title === 'Prequel Memes'),
      currentIndex: data.findIndex(item => item.title === 'Prequel Memes'),
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
        <HeaderBlurb data={this.state.data.headerBlurb} bgColor={'#101010'} color={'#bf9800'} />
        <ImageBar image={PrequelMemesImageBar} />
        <ProjectInfo data={this.state.data.projectInfo} />
        <Section title={'KICKOFF'} data={this.state.data.kickOff} isDark />
        <DiscoverySection data={this.state.data.discovery} isDark={false} />
        <Section title={'DESIGN'} data={this.state.data.design} isDark />
        <Section title={'ANALYTICS'} data={this.state.data.testing} isDark={false} />
        <Section title={'TAKEAWAY'} data={this.state.data.takeaway} isDark />
        <FooterNavigation currentIndex={this.state.currentIndex} />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;
export default PrequelMemes;
