import React, { Component } from 'react';
import styled from 'styled-components';

class FileName extends Component {
  render() {
    return (
      <View>
        <Title>Title</Title>
      </View>
    );
  }
}

const View = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3.438rem;
`;

export default FileName;
