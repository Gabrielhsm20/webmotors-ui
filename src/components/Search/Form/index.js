import {
  useContext, useState, useEffect, useCallback,
} from 'react';

import PropTypes from 'prop-types';

import { VehiclesContext } from '../../../contexts/VehiclesContext';

import VehiclesService from '../../../services/VehiclesService';
import BrandsService from '../../../services/BrandsService';
import ModelsService from '../../../services/ModelsService';
import VersionsService from '../../../services/VersionsService';

import Loader from '../../Loader';
import Select from '../Select';

import { Button } from '../../Button';
import { Container } from './styles';

export default function Form({ className }) {
  const [, setVehicles] = useContext(VehiclesContext);
  const [isLoading, setIsLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);

  const loadBrands = useCallback(async () => {
    try {
      setIsLoading(true);

      const brandsList = await BrandsService.listBrands();
      setBrands(brandsList);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  });

  const loadModels = useCallback(async (brandId) => {
    try {
      setIsLoading(true);

      const modelsList = await ModelsService.listModels({ MakeID: brandId });
      setModels(modelsList);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  });

  const loadVersions = useCallback(async (modelID) => {
    try {
      setIsLoading(true);

      const versionsList = await VersionsService.listVersions({ ModelID: modelID });
      setVersions(versionsList);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    loadBrands();
  }, []);

  function handleChangeBrand(event) {
    loadModels(event.target.value);
    setVersions([]);
  }

  function handleChangeModel(event) {
    loadVersions(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);

      const vehiclesList = await VehiclesService.listVehicles();
      setVehicles(vehiclesList);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Container className={className} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 inputGroup d-flex">
            {['Novos', 'Usados'].map((status, index) => (
              <label
                key={`checkboxOption-${index}`}
                htmlFor={`checkboxOption-${index}`}
              >
                <input
                  type="checkbox"
                  id={`checkboxOption-${index}`}
                  name="status[]"
                  value="new"
                />
                <span>{status}</span>
              </label>
            ))}
          </div>
          <div className="col-xs-12 col-md-6 inputGroup unify">
            <Select
              icon="location_on"
              label="Onde"
              name="locality"
              options={[
                { text: 'Belo Horizonte - MG', value: 'BH' },
                { text: 'São Paulo - SP', value: 'SP' },
                { text: 'Rio de Janeiro - RJ', value: 'RJ' },
              ]}
            />

            <Select
              width={180}
              label="Raio"
              name="radius"
              options={[
                { text: '50km', value: 50 },
                { text: '100km', value: 100 },
                { text: '200km', value: 200 },
                { text: '300km', value: 300 },
              ]}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <Select
              label="Marcas"
              name="brand"
              onChange={handleChangeBrand}
              options={
                brands.map((el) => ({
                  text: el.Name,
                  value: el.ID,
                }))
              }
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <Select
              label="Modelo"
              name="model"
              onChange={handleChangeModel}
              options={
                models.map((el) => ({
                  text: el.Name,
                  value: el.ID,
                }))
              }
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <Select
              label="Ano desejado"
              name="manufactureYear"
              options={[
                { text: '2022', value: 2022 },
                { text: '2021', value: 2021 },
                { text: '2020', value: 2020 },
                { text: '2019', value: 2019 },
                { text: '2018', value: 2018 },
                { text: '2017', value: 2017 },
              ]}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <Select
              label="Faixa de preço"
              name="priceRange"
              options={[
                { text: '- 9.000', value: '-9' },
                { text: '10.000 ~ 19.000', value: '10-19' },
                { text: '20.000 ~ 49.000', value: '20-49' },
                { text: '50.000 ~ 69.000', value: '50-69' },
                { text: '70.000 ~ 99.000', value: '70-99' },
                { text: '+ 100.000', value: '+100' },
              ]}
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4">
            <Select
              label="Versão"
              name="version"
              options={
                versions.map((el) => ({
                  text: el.Name,
                  value: el.ID,
                }))
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 d-flex align-items-center advancedSearch">
            <span className="material-icons">chevron_right</span>
            <span>Busca avançada</span>
          </div>
          <div className="col-xs-12 col-sm-8 d-flex align-items-center justify-flex-end viewDeals">
            <span>Limpar filtros</span>
            <Button type="submit">
              Ver ofertas
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

Form.propTypes = {
  className: PropTypes.string,
};

Form.defaultProps = {
  className: '',
};
