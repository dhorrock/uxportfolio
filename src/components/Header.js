import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderLogo from '../assets/Common/Header-Logo.svg';

class Header extends Component {
  render() {
    return (
      <View>
        <Link to={'/'}>
          <Logo src={HeaderLogo} />
        </Link>
        <Text>Dustin Horrock is a UX Designer in Winnipeg</Text>
      </View>
    );
  }
}

const View = styled.div`
  display: block;
  padding-top: 80px;
`;
const Text = styled.p`
  font-family: Cormorant Garamond;
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
  height: 100px;
`;

export default Header;
