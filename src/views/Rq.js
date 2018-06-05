import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBlurb from '../components/HeaderBlurb';
import data from '../data/data';

class RQ extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.find(item => item.title === 'RQ'),
    };
  }
  componentDidMount() {
    window.scrollTo(0, 400);
  }
  render() {
    return (
      <View>
        <HeaderBlurb title={this.state.data.blurbTitle} blurb={this.state.data.blurb} bgColor={'#1a1e23'} />
      </View>
    );
  }
}

const View = styled.div`
  display: block;
`;
export default RQ;
