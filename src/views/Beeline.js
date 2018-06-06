import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import ProjectInfo from '../components/ProjectInfo';
import data from '../data/data';
import BeelineImageBar from '../assets/Beeline/Beeline-ImageBar.svg';
import Section from '../components/Section';
import Footer from '../components/Footer';

class Beeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.find(item => item.title === 'Beeline'),
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <View>
        <HeaderBlurb data={this.state.data.headerBlurb} bgColor={'#1a1e23'} />
        <ImageBar src={BeelineImageBar} />
        <ProjectInfo data={this.state.data.projectInfo} />
        <Section title={'KICKOFF'} data={this.state.data.kickOff} isDark />
        <Section title={'DESIGN'} data={this.state.data.design} isDark={false} />
        <Section title={'TESTING'} data={this.state.data.testing} isDark />
        <Section title={'TAKEAWAY'} data={this.state.data.takeaway} isDark={false} />
        <Footer />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;

const ImageBar = styled.img`
  display: block;
  width: 100%;
  height: auto;
  vertical-align: middle;
`;
export default Beeline;
