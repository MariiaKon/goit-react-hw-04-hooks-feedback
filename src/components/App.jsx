import { Component } from 'react';
import { Title, ButtonList, Button, StatList } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  values = Object.values(this.state);
  labels = Object.keys(this.state);

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((acc, value) => acc + value, 0);

    if (!total) {
      return false;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = this.state.good / this.countTotalFeedback();

    if (!percentage) {
      return false;
    }
    return Math.round(percentage * 100);
  };

  handleClick = event => {
    for (const key in this.state) {
      if (key === event.target.textContent) {
        this.setState({ [event.target.textContent]: this.state[key] + 1 });
      }
    }
  };

  render() {
    const values = Object.values(this.state);

    return (
      <>
        <Title>Please leave feedback</Title>
        <ButtonList>
          {this.labels.map(btn => {
            return (
              <li key={btn}>
                <Button type="button" onClick={this.handleClick}>
                  {btn}
                </Button>
              </li>
            );
          })}
        </ButtonList>

        <Title>Statistics</Title>
        {this.countTotalFeedback() ? (
          <ul>
            {this.labels.map((label, i) => {
              return (
                <StatList key={label}>
                  {label}: {values[i]}
                </StatList>
              );
            })}
            <StatList>Total: {this.countTotalFeedback()}</StatList>
            {this.countPositiveFeedbackPercentage() && (
              <StatList>
                Positive feedback: {this.countPositiveFeedbackPercentage()}%
              </StatList>
            )}
          </ul>
        ) : (
          <p>No feedback given</p>
        )}
      </>
    );
  }
}
