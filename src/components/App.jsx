import { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './Buttons';
import { Section } from './Section';

export function App() {
  const [state, setState] = useState({ good: 0, bad: 0, neutral: 0 });

  const countTotalFeedback = () => {
    return Object.values(state).reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = state.good / countTotalFeedback();

    if (!percentage) {
      return false;
    }
    return Math.round(percentage * 100);
  };

  const handleClick = event => {
    for (const key in state) {
      if (key === event.target.textContent) {
        setState({ ...state, [event.target.textContent]: state[key] + 1 });
      }
    }
  };

  return (
    <>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions options={state} onLeaveFeedback={handleClick} />
        }
      ></Section>

      <Section
        title="Statistics"
        children={
          <Statistics
            stats={state}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        }
      ></Section>
    </>
  );
}
