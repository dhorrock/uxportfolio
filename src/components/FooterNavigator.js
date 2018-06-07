import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import data from '../data/data';

class FooterNavigator extends Component {
  getNextLink = () => {
    const nextIndex = this.props.currentIndex + (this.props.currentIndex === data.length - 1 ? 0 : 1);
    return `/${data[nextIndex].link}`;
  };

  render() {
    return (
      <View>
        {this.props.currentIndex !== data.length - 1 && (
          <Link to={this.getNextLink()}>
            <Text>UP NEXT</Text>
            <Text accent>{`${data[this.props.currentIndex + 1].title} →`}</Text>
          </Link>
        )}
      </View>
    );
  }
}

const View = styled.div`
  display: flex;
  align-items: center
  justify-content: flex-end;
  height: 160px;
  background-color: #1a1e23;
`;

const Text = styled.p`
  font-size: ${props => (props.accent ? '1.5rem' : '1.063rem')}
  color: #3c4653;
  color: ${props => (props.accent ? 'white' : '3c4653')}
  margin-right: 20px;
  text-align: right;
  font-weight: 300;
`;

FooterNavigator.proptypes = {
  currentIndex: PropTypes.number.isRequired,
};
export default FooterNavigator;
