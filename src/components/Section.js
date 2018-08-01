import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Section extends Component {
  render() {
    return (
      <View isDark={this.props.isDark}>
        <Content>
          <Title>{this.props.title}</Title>
          {this.props.hasFigma && (
            <Link target={'_blank'} to={this.props.data.figma}>
              <FigmaLink>Figma</FigmaLink>
            </Link>
          )}
          <Text>{this.props.data.topText}</Text>
          {this.props.data.images.map(image => (
            <div>
              <Image src={image.image} key={image.image} />
              <FigCap>{image.caption}</FigCap>
            </div>
          ))}
          <Text>{this.props.data.bottomText}</Text>
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

const FigmaLink = styled.a`
  color: red;
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
  display: block;
  width: 100%;
  height: auto;
  vertical-align: middle;
  margin-top: 5%;
`;

const FigCap = styled.figcaption`
  text-align: center;
  background-color: #333;
  color: white;
`;

Section.propTypes = {
  isDark: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    topText: PropTypes.string.isOptional,
    figma: PropTypes.string.isOptional,
    images: PropTypes.arrayOf(PropTypes.object).isOptional,
    bottomText: PropTypes.string.isOptional,
  }).isRequired,
};

export default Section;
