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
  display: grid;
  margin: 0 auto;
  text-align: center;
  grid-template-columns: 1fr 1fr;
  max-width: 1280px;
  @media (max-width: 1250px) and (min-width: 0) {
    grid-template-columns: 1fr;
  
`;
export default Portfolio;
