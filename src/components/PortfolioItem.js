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
            <InnerContent>
              <ContentWrapper>
                <Title>{this.props.data.title}</Title>
                <Text>—</Text>
                <Text>{this.props.data.description}</Text>
              </ContentWrapper>
            </InnerContent>
          </Content>
        </View>
      </Link>
    );
  }
}

const View = styled.div`
  display: inline-flex;
  height: 50vw;
  width: 50vw;
  max-width: 600px;
  max-height: 600px;
  background-color: white;
  margin-top: 40px;
  @media (max-width: 767px) and (min-width: 0) {
    min-width: 350px;
    min-height: 350px;
  }
`;
const Title = styled.h2`
  text-align: center;
  font-size: 3.438rem;
  line-height: 4.5rem;
  margin-bottom: 0;
  margin-top: 0;
  @media (max-width: 767px) and (min-width: 0) {
    font-size: 2.438em;
    line-height: 2.8125rem;
  }
`;

const Text = styled.p`
  color: ${props => (props.link ? 'black' : 'black')};
  margin-top: 0;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-bottom: 0;
  @media (max-width: 767px) and (min-width: 0) {
    font-size: 1.263rem;
    line-height: 1.688rem;
  }
`;

const Content = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

const InnerContent = styled.div`
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
`;

const ContentWrapper = styled.div``;

PortfolioItem.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PortfolioItem;
