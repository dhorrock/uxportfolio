import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class HeaderBlurb extends Component {
  render() {
    return (
      <View bgColor={this.props.bgColor}>
        <Content color={this.props.color}>
          <Title>{this.props.data.blurbTitle}</Title>
          <Text>{this.props.data.blurb}</Text>
        </Content>
      </View>
    );
  }
}

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  background-color: ${props => props.bgColor}
  overflow: hidden;
`;

const Content = styled.div`
  width: 80%;
  text-align: center;
  color: ${props => props.color}
  max-width: 1000px;
`;

const Title = styled.h1`
  display: block;
  font-size: 4.875rem;
  line-height: 5.625rem;
  text-transform: uppercase;
  @media (max-width: 767px) and (min-width: 0) {
    font-size: 3.438rem;
    line-height: 3.9375rem;
    text-transform: uppercase;
  }
`;

const Text = styled.p`
  font-size: 1.688rem;
  line-height: 2.8125rem;
  font-weight: 200;
  @media (max-width: 767px) and (min-width: 0) {
    font-weight: 200;
    font-size: 1.188rem;
    line-height: 1.6875rem;
    margin-top: 1.125rem;
    margin-bottom: 1.125rem;
  }
`;

HeaderBlurb.propTypes = {
  bgColor: PropTypes.string.isRequired,
  data: PropTypes.shape({
    blurbTitle: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired,
  }).isRequired,
};
export default HeaderBlurb;
