import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
	width: 100%;
`;

const Input = ({ label, defaultValue, onChange }) => {
	const [value, setValue] = useState(defaultValue);

	const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div>
			<label>{label}</label>
			<StyledInput value={value} onChange={handleChange}/>
    </div>
  );
};

Input.propTypes = {
	label: PropTypes.string,
	defaultValue: PropTypes.number,
	onChange: PropTypes.func
};

export default Input