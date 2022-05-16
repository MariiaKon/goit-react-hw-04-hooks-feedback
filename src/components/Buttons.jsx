import PropTypes from 'prop-types';
import { ButtonList, Button } from './App.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonList>
      {Object.keys(options).map(btn => {
        return (
          <li key={btn}>
            <Button type="button" onClick={onLeaveFeedback}>
              {btn}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
