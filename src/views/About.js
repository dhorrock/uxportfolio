import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import AboutImage from '../assets/Common/about.jpg';

class About extends React.Component {
  state = {
    data: {
      topText: '',
      images: [{ image: AboutImage, caption: '' }],
      bottomText:
        'Hi my name is Dustin and I’m a designer, developer and photography enthusiast. I believe that teamwork is the most important component to success. I enjoy asking "What if ?" and am determined to have a positive impact by transforming how people access information and technology.',
    },
  };
  render() {
    return (
      <View>
        <Section title={'About Me'} data={this.state.data} isDark />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;

export default About;
