import React, { Component } from 'react';
import styled from 'styled-components';

class ImageBar extends Component {
  render() {
    return <Image src={this.props.image} />;
  }
}

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

export default ImageBar;
