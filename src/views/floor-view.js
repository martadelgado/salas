import React, { useContext, useState } from 'react';
import Card from '../components/card';
import styled from 'styled-components';
import Button from '../components/button';
import { AppContext } from '../context/AppContext';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: auto;
`;

const Container = styled.div`
  border: 1px solid #2E344D;
  border-radius: 12px;
  padding: 12px;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
`;


const FloorView = () => {
  const { floors, setFloors, selectedFloor } = useContext(AppContext);

  const addRoom = () => {
    if (!selectedFloor) return;
    
    const updatedFloors = floors.map(floor => {
      if (floor.id === selectedFloor.id) {
        const newRoom = {
          id: floor.rooms.length + 1,
          maxOccupancy: '',
          occupancy: ''
        };
        const newFloor = {
          ...floor,
          rooms: [...floor.rooms, newRoom]
        }

        selectedFloor?.rooms.push(newFloor);
        
        return newFloor;
      }

      return floor;
    });

    setFloors(updatedFloors);
  };
  
  return (
    <Container>
      <Flexbox>
        <h2> Planta {selectedFloor.id} </h2>
        <Button onClick={addRoom} label={'Añadir sala'} />
      </Flexbox>
      { selectedFloor && (
        <CardContainer>
          {selectedFloor?.rooms?.map((room, index) => (
            <Card
              key={index}
              maxOccupancy={room.maxOccupancy}
              occupancy={room.occupancy}
            />
          ))}
        </CardContainer>
      )}
    </Container>
  );
};

export default FloorView
