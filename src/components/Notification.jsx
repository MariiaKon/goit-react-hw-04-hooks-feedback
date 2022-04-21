import { Component } from 'react';
import { Msg } from './App.styled';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <Msg>{message}</Msg>;
  }
}
