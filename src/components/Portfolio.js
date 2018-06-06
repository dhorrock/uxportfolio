import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';
import PortfolioEntries from '../data/data';

class Portfolio extends Component {
  render() {
    return <View>{PortfolioEntries.map(item => <PortfolioItem data={item} key={item.key} />)}</View>;
  }
}

const View = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export default Portfolio;
