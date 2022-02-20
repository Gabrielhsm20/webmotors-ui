import { useMemo, useState, createContext } from 'react';

import PropTypes from 'prop-types';

export const VehiclesContext = createContext();

export function VehiclesProvider({ children }) {
  const [vehicles, setVehicles] = useState([]);
  const value = useMemo(() => [vehicles, setVehicles], [vehicles]);

  return (
    <VehiclesContext.Provider
      value={value}
    >
      {children}
    </VehiclesContext.Provider>
  );
}

VehiclesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
