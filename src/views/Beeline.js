import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import ProjectInfo from '../components/ProjectInfo';
import data from '../data/data';
import BeelineImageBar from '../assets/Beeline/Beeline-ImageBara.svg';
import Section from '../components/Section';
import FooterNavigation from '../components/FooterNavigator';
import ImageBar from '../components/ImageBar';

class Beeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.find(item => item.title === 'Beeline'),
      currentIndex: data.findIndex(item => item.title === 'Beeline'),
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <View>
        <HeaderBlurb data={this.state.data.headerBlurb} bgColor={'#9B51E0'} color={'#FFF'} />
        <ImageBar image={BeelineImageBar} />
        <ProjectInfo data={this.state.data.projectInfo} />
        <Section title={'WIREFRAMES'} data={this.state.data.design} isDark />
        <Section title={'DESIGN'} data={this.state.data.testing} isDark={false} />
        <Section title={'FINAL'} data={this.state.data.takeaway} isDark={false} />
        <FooterNavigation currentIndex={this.state.currentIndex} />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;

export default Beeline;
