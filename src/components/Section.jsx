import PropTypes from 'prop-types';
import { SectionTitle } from './App.styled';

export function Section({ title, children }) {
  return (
    <SectionTitle>
      {title}
      {children}
    </SectionTitle>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
