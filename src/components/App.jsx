import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './Buttons';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = this.state.good / this.countTotalFeedback();

    if (!percentage) {
      return false;
    }
    return Math.round(percentage * 100);
  };

  // из лекции Репеты для запоминания
  // handleClick1 = btn => {
  //   this.setState(prevState => {
  //     return { [btn]: prevState[btn] + 1 };
  //   });
  // };

  handleClick = event => {
    for (const key in this.state) {
      if (key === event.target.textContent) {
        this.setState({ [event.target.textContent]: this.state[key] + 1 });
      }
    }
  };

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleClick}
            />
          }
        ></Section>

        <Section
          title="Statistics"
          children={
            <Statistics
              stats={this.state}
              // good={this.state.good}
              // neutral={this.state.neutral}
              // bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        ></Section>
      </>
    );
  }
}
