import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PortfolioItem extends Component {
  render() {
    return (
      <Link to={this.props.data.link}>
        <View>
          <Content>
            <Image src={this.props.data.image} />
            <Title>{this.props.data.title}</Title>
            <Text>{this.props.data.description}</Text>
            <Text link={true}>(Read more)</Text>
          </Content>
        </View>
      </Link>
    );
  }
}

const View = styled.div`
  display: inline-flex;
  width: calc(100% - 200px);
  background-color: white;
  height: 400px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) and (min-width: 0) {
    width: calc(100% - 80px);
  }
`;
const Title = styled.h2`
  text-align: center;
  font-size: 3.438rem;
  line-height: 4.5rem;
  margin-top: 0.5625rem;
  margin-bottom: 0;
  @media (max-width: 767px) and (min-width: 0) {
    font-size: 2.438em;
    line-height: 2.8125rem;
    margin-top: 0.5625rem;
    margin-bottom: 1.125rem;
  }
`;

const Text = styled.p`
  color: ${props => (props.link ? 'black' : 'black')};
  margin-left: 20px;
  margin-right: 20px;
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-top: 0.5625rem;
  margin-bottom: 1.6875rem;
  @media (max-width: 767px) and (min-width: 0) {
    font-size: 1.063rem;
    line-height: 1.688rem;
    margin-bottom: 1.125rem;
    margin-top: 0.5625rem;
  }
`;

const Content = styled.div`
  display: inline-block;
`;

const Image = styled.img`
  border-radius: 20px;
  width: 140px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

PortfolioItem.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PortfolioItem;
