import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigationBar extends Component {
  state = {
    selected: 1,
  };

  clickAction = selection => {
    this.setState({ selected: selection });
    this.props.select(selection);
  };

  render() {
    return (
      <View>
        <Selection active={this.state.selected === 1} to="/" onClick={() => this.clickAction(1)}>
          <Text>PORTFOLIO</Text>
        </Selection>
        <Selection active={this.state.selected === 2} to="/about" onClick={() => this.clickAction(2)}>
          <Text>ABOUT</Text>
        </Selection>
      </View>
    );
  }
}

const View = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0;
  margin-top: 2.25rem;
  line-height: 2.25rem;
`;
const Selection = styled(Link)`
  text-align: center;
  font-size: 1rem;
  margin: 20px;
  cursor: pointer;
  padding-bottom: 10px;
  color: ${props => (props.active ? 'red' : 'black')};
  border-bottom: ${props => (props.active ? '3px solid red' : '')};
`;

NavigationBar.propTypes = {
  select: PropTypes.func.isRequired,
};

export default NavigationBar;
