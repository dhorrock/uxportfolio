import React, { Component } from 'react';
import styled from 'styled-components';

class ImageBar extends Component {
  render() {
    return <Image src={this.props.image} />;
  }
}

const Image = styled.img`
  display: block;
  background-color: white;
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

export default ImageBar;
