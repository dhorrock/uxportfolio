import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class DiscoverySection extends Component {
  render() {
    return (
      <View isDark={this.props.isDark}>
        <Content>
          <Title>Discoveries</Title>
          <Cardview>
            {this.props.data.map(object => (
              <Card>
                <Image src={object.image} key={object.title} />
                <Text>
                  <strong>{object.title}</strong>
                </Text>
                <Text>{object.blurb}</Text>
              </Card>
            ))}
            <Text>{this.props.data.bottomText}</Text>
          </Cardview>
        </Content>
      </View>
    );
  }
}

const View = styled.div`
  background-color: ${props => (props.isDark ? '#e8e8e8' : 'white')};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: inline-block;
  width: 100%;
  color: black;
  margin: 10%;
  max-width: 1200px;
`;

const Text = styled.p`
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
  @media (max-width: 767px) and (min-width: 0) {
    margin-top: 1.125rem;
    margin-bottom: 1.125rem;
    font-size: 1.063rem;
    line-height: 1.688rem;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 3.438rem;
  line-height: 4.5rem;
  margin-bottom: 2.25rem;
  text-transform: uppercase;
  @media (max-width: 767px) and (min-width: 0) {
    font-size: 2.438em;
    line-height: 2.8125rem;
    margin-bottom: 0.5625rem;
    text-transform: uppercase;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 340px;
  align-self: center;
`;

const Cardview = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Card = styled.div`
  display: block;
  width: 46%;
  margin: 2%;
  @media (max-width: 767px) and (min-width: 0) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

DiscoverySection.propTypes = {
  isDark: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    topText: PropTypes.string.isOptional,
    figma: PropTypes.string.isOptional,
    images: PropTypes.arrayOf(PropTypes.object).isOptional,
    bottomText: PropTypes.string.isOptional,
  }).isRequired,
};

export default DiscoverySection;
