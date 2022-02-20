import { useContext } from 'react';

import { VehiclesContext } from '../../contexts/VehiclesContext';

import Card from '../Card';

import { Container } from './styles';

export default function Content() {
  const [vehicles] = useContext(VehiclesContext);

  return vehicles.length > 1 && (
    <Container>
      <h2>Veículos encontrados</h2>
      <div className="row mt-4">
        {vehicles.map((el, i) => (
          <div
            key={`vehicle-${i}`}
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <Card
              image={el.Image}
              band={el.Make}
              model={el.Model}
              version={el.Version}
              price={el.Price}
              modelYear={el.YearModel}
              manufactureYear={el.YearFab}
              km={el.KM}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
