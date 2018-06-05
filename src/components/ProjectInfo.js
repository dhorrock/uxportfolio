import React, { Component } from 'react';
import styled from 'styled-components';

class ProjectInfo extends Component {
  render() {
    return (
      <View>
        <Content>
          <Title>Details</Title>
          <Text>
            <strong>Client: </strong>
            {this.props.data.client}
          </Text>
          <Text>
            <strong>Objective: </strong>
            {this.props.data.objective}
          </Text>
          <Text>
            <strong>Timeline: </strong>
            {this.props.data.timeline}
          </Text>
          <Text>
            <strong>Team: </strong>
            {this.props.data.team.map(member => <ListItem>{member}</ListItem>)}
          </Text>
          <Text>
            <strong>My Role: </strong>
            {this.props.data.role}
          </Text>
        </Content>
      </View>
    );
  }
}

const View = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: inline-block;
  background-color: white;
  color: black;
  width: 80%;
  margin: 10%;
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

const ListItem = styled.li`
  color: black;
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

export default ProjectInfo;
