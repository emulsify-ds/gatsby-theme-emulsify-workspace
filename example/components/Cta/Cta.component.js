/**
 * @file Cta.component.js
 * Exports a CTA component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Cta.css';

import Button from "../Button/Button.component";


/**
 * Component that renders a button with a click handler.
 */
const Cta = props => {
  const { heading, content } = props;

  return (
    <div className="cta">
      <h2>{heading}</h2>
      <Button>{content}</Button>
    </div>
  );
};

Cta.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
};

Cta.defaultProps = {
  heading: '',
  content: '',
};

export default Cta;
