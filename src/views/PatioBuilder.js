import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import ProjectInfo from '../components/ProjectInfo';
import data from '../data/data';
import Section from '../components/Section';
import DiscoverySection from '../components/DiscoverySection';
import FooterNavigation from '../components/FooterNavigator';
import ImageBar from '../components/ImageBar';
import PatioBuilderImageBar from '../assets/PatioBuilder/PatioBuilder-ImageBar.jpg';

class PrequelMemes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.find(item => item.title === 'Patio Builder'),
      currentIndex: data.findIndex(item => item.title === 'Patio Builder'),
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
        <HeaderBlurb data={this.state.data.headerBlurb} bgColor={'#6e98b4'} color={'#FFF'} />
        <ImageBar image={PatioBuilderImageBar} />
        <ProjectInfo data={this.state.data.projectInfo} />
        <Section title={'KICKOFF'} data={this.state.data.kickOff} isDark />
        <DiscoverySection data={this.state.data.discovery} isDark={false} />
        <Section title={'BRAINSTORMING'} data={this.state.data.design} isDark />
        <Section title={'DESIGN'} data={this.state.data.testing} isDark={false} />
        <Section title={'LAUNCH'} data={this.state.data.takeaway} isDark />
        <FooterNavigation currentIndex={this.state.currentIndex} />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;
export default PrequelMemes;
