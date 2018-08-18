import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <View>
        <ContactInfo>
          <Link target="blank" to={'https://zety.com/mycv/dustinhorrock'}>
            <GridItem>
              <Text>Resume</Text>
            </GridItem>
          </Link>
          <Link target="_blank" to={'https://linkedin.com/in/dustinrock'}>
            <GridItem>
              <Text>LinkedIn</Text>
            </GridItem>
          </Link>
          <Link target="_blank" to={'https://github.com/dhorrock'}>
            <GridItem>
              <Text>Github</Text>
            </GridItem>
          </Link>
        </ContactInfo>
      </View>
    );
  }
}

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 50%;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  color: #252b33;
  font-size: 0.938rem;
  text-align: center;
`;

export default Footer;
