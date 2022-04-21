import { Component } from 'react';
import { SectionTitle } from './App.styled';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <SectionTitle>
        {title}
        {children}
      </SectionTitle>
    );
  }
}
