import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <View>
        <ContactInfo>
          <GridItem>
            <Text>Email</Text>
          </GridItem>
          <GridItem>
            <Text>LinkedIn</Text>
          </GridItem>
          <GridItem>
            <Text>Github</Text>
          </GridItem>
        </ContactInfo>
      </View>
    );
  }
}

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  height: 100px;
  width: 80%;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  color: #252b33;
  font-size: 0.938rem;
`;

export default Footer;
