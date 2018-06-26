import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as animationData from '../data/data.json';

class Header extends Component {
  render() {
    return (
      <View>
        <Link to={'/'}>
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
        </Link>
      </View>
    );
  }
}

const View = styled.div`
  display: block;
  padding-top: 80px;
`;
const Text = styled.p`
  font-family: 'Open Sans';
  font-weight: 300;
  text-align: center;
  font-size: 1.288rem;
  margin-bottom: 2.25rem;
  margin-top: 2.25rem;
`;
const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  margin-bottom: 2.25rem;
`;

export default Header;
