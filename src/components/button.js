import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #2E344D;
  color: #FFF;
  border-radius: 8px;
	height: fit-content;
  padding: 6px 24px;
	width: fit-content;
`;

const Button = ({ onClick, label }) => {
  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  );
};

Button.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string,
};

export default Button