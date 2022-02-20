import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Select({
  width, icon, label, name, options, onChange,
}) {
  return (
    <Container className="select" width={width}>
      {!!icon && (<span className="icon material-icons">{icon}</span>)}
      {!!label && (<span className="label">{`${label}:`}</span>)}
      <select name={name} onChange={onChange}>
        <option value="">-</option>
        {options.map((el) => (
          <option
            key={`option-${name}-${el.value}`}
            value={el.value}
          >
            {el.text}
          </option>
        ))}
      </select>
    </Container>
  );
}

Select.propTypes = {
  width: PropTypes.number,
  icon: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  width: null,
  icon: null,
  label: null,
  onChange: () => {},
};
