// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Section, FeedbackOptions, Statistics } from './';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
`;

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  getOptions = () => {
    return ['good', 'neutral', 'bad'];
  };

  handleFeedbackBtnClick = ({ target }) => {
    const { name } = target;
    const newState = { ...this.state };
    newState[name] += 1;
    newState.total = this.countTotal(newState);
    newState.positivePercentage = this.countPositivePercentage(newState);
    this.setState(newState);
  };

  countTotal = ({ good, bad, neutral }) => {
    return good + bad + neutral;
  };

  countPositivePercentage = ({ good, total }) => {
    return +((good / total) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.getOptions()}
            onLeaveFeedback={this.handleFeedbackBtnClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
