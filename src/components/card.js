import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import styled from 'styled-components';
import Input from './input';
import { AppContext } from '../context/AppContext';

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 16px;
`;

const StyledCard = styled.div`
  background-color: #F5F7FB;
	border-radius: 26px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px 24px;
	width: 200px;
`;

const Card = ({ index, maxOccupancy, occupancy }) => {
	const { floor } = useContext(AppContext);

  return (
    <>
			<StyledCard>
				<div> Sala {index} planta {floor} </div>
				<Input label={'Capacided maxima'} defaultValue={maxOccupancy}/>
				<Input label={'Ocupacion'} defaultValue={occupancy}/>
				<ButtonWrapper>
					<Button label={'Modificar'} />
				</ButtonWrapper>
			</StyledCard>
    </>
  );
};

Card.propTypes = {
	index: PropTypes.number,
	maxOccupancy: PropTypes.number,
	occupancy: PropTypes.number,
};

export default Card
