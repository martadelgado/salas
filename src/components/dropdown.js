import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

const StyledDropdown = styled.select`
  border-radius: 8px;
	margin-bottom: 24px;
	padding: 4px 8px;
	width: 122px;
`;

const Dropdown = () => {
	const { floors, setSelectedFloor } = useContext(AppContext);

	const handleSelect = (e) => {
		const roomData = floors?.find((floor) => {
			return floor.id === parseInt(e.target.value);
		});
		setSelectedFloor(roomData);
	};

  return (
		<StyledDropdown onChange={handleSelect}>
			{floors?.map((floor) => (
				<option key={floor.id} value={floor.id}>
					Planta {floor.id}
				</option>
			))}
		</StyledDropdown>
	);
	
};

Dropdown.propTypes = {
};

export default Dropdown