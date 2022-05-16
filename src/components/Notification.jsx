import PropTypes from 'prop-types';
import { Msg } from './App.styled';

export function Notification({ message }) {
  return <Msg>{message}</Msg>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
