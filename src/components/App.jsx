import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionWrapper } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const positiveRating = (good / total) * 100;
    if (total > 0) {
      return Math.round(positiveRating);
    }
    return 0;
  };

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        return setGood(good + 1);
      case 'neutral':
        return setNeutral(neutral + 1);
      case 'bad':
        return setBad(bad + 1);
      default:
        return null;
    }
  };

  return (
    <Container>
      <SectionWrapper title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </SectionWrapper>
      <SectionWrapper title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectionWrapper>
    </Container>
  );
};
