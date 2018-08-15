import React, { Component } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import * as animationData from '../data/data.json';

class Header extends Component {
  render() {
    return (
      <View>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          height={250}
          width={200}
          isStopped={false}
          isPaused={false}
        />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
  padding-top: 80px;
`;

export default Header;
