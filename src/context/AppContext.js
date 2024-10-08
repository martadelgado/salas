import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [floors, setFloors] = useState([
		{
			id: 1,
			rooms: [
				{ id: 1, maxOccupancy: 44, occupancy: 90 },
				{ id: 2, maxOccupancy: 20, occupancy: 100 },
				{ id: 3, maxOccupancy: 11, occupancy: 0 },
				{ id: 4, maxOccupancy: 60, occupancy: 80 }
			]
		},
		{
			id: 2,
			rooms: [
				{ id: 1, maxOccupancy: 44, occupancy: 90 },
				{ id: 2, maxOccupancy: 20, occupancy: 100 }
			]
		},
		{
			id: 3,
			rooms: [
				{ id: 1, maxOccupancy: 44, occupancy: 90 },
				{ id: 2, maxOccupancy: 20, occupancy: 90 },
				{ id: 3, maxOccupancy: 11, occupancy: 60 },
				{ id: 4, maxOccupancy: 28, occupancy: 20 },
				{ id: 5, maxOccupancy: 9, occupancy: 0 }
			]
		}
	]);
	const [selectedFloor, setSelectedFloor] = useState(floors[0]);

  return (
    <AppContext.Provider
      value={{
        floors,
        setFloors,
				selectedFloor,
				setSelectedFloor
      }}
    >
      {children}
    </AppContext.Provider>
  );
};