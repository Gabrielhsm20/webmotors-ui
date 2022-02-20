import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({
  image, band, model, version, price, modelYear, manufactureYear, km,
}) {
  return (
    <Container>
      <img
        src={image}
        alt="Foto veículo"
      />
      <div className="data">
        <a>{`${band} ${model}`}</a>
        <small>{version}</small>
      </div>
      <div className="details">
        <span>{`${manufactureYear}/${modelYear}`}</span>
        <span>{`${km}km`}</span>
      </div>
      <div className="price">
        {`R$ ${price}`}
      </div>
    </Container>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  band: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  manufactureYear: PropTypes.number.isRequired,
  modelYear: PropTypes.number.isRequired,
  km: PropTypes.number.isRequired,
};
