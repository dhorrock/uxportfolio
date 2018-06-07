import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <View>
        <Link to={'/'}>
          <Logo
            src={`data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'121'%20height%3D'73'%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'crimson'%2F%3E%3Ctext%20x%3D'60.5'%20y%3D'41.5'%20font-size%3D'20'%20font%3D'Verdana%2C%20sans-serif'%20fill%3D'white'%20text-anchor%3D'middle'%3E121%20x%2073%3C%2Ftext%3E%3C%2Fsvg%3E`}
          />
        </Link>
        <Text>Dustin Horrock is a UX Designer based in Winnipeg.</Text>
      </View>
    );
  }
}

const View = styled.div`
  height: 255px;
  display: grid;
  width: 100%;
`;
const Text = styled.p`
  font-family: Cormorant Garamond;
  font-weight: 300;
  text-align: center;
  font-size: 1.388rem;
  margin-bottom: 2.25rem;
  margin-top: 2.25rem;
`;
const Logo = styled.img`
  display: block;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
`;

export default Header;
