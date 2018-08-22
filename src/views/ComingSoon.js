import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class ComingSoon extends React.Component {
  render() {
    return (
      <View>
        <Content>
          <Text>This case study will be available soon!</Text>
          <Text>
            <Link to={'/'}>
              <ALink>Go Back</ALink>
            </Link>
          </Text>
        </Content>
      </View>
    );
  }
}

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const Content = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  text-align: center;
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

const ALink = styled.a`
  text-align: center;
  cursor: pointer;
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

export default ComingSoon;
