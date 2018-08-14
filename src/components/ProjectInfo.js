import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProjectInfo extends Component {
  render() {
    return (
      <View>
        <Content>
          <Title>About</Title>
          <Text>
            <strong>For: </strong>
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
            {this.props.data.team.map(member => <ListItem key={member}>{member}</ListItem>)}
          </Text>
          <Text>
            <strong>My Role: </strong>
            {this.props.data.role}
          </Text>
          <Text>
            <strong>Link: </strong>
            <Link target={'_blank'} to={this.props.data.link}>
              <ALink>Open</ALink>
            </Link>
          </Text>
          <Text>
            <Disclaimer>
              To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this
              case study. All information in this case study is my own and does not necessarily reflect the views of
              anyone but myself.
            </Disclaimer>
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

const Disclaimer = styled.i`
  color: grey;
`;

const ALink = styled.a`
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

ProjectInfo.propTypes = {
  data: PropTypes.shape({
    client: PropTypes.string.isRequired,
    objective: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    team: PropTypes.arrayOf(PropTypes.string).isRequired,
    role: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectInfo;
