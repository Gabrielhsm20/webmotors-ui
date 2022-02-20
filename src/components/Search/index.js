import { useState } from 'react';

import SearchForm from './Form';

import { Button } from '../Button';
import { Header, Content } from './styles';

export default function Search() {
  const [category, setCategory] = useState(0);
  const [showSearchForm, setShowSearchForm] = useState(false);

  const categories = [
    { label: 'Carros', icon: 'directions_car' },
    { label: 'Motos', icon: 'two_wheeler' },
  ];

  function handleChangeCategory(index) {
    setCategory(index);
  }

  function toggleSearchForm() {
    setShowSearchForm((prevState) => !prevState);
  }

  return (
    <>
      <Header className="row">
        <div className="col-xs-12 col-sm-4">
          <button
            className="sellBtn"
            type="button"
          >
            Vender meu veículo
          </button>
        </div>

        <div className="col-xs-12 col-sm-8 mt-6 mt-sm-0 categories">
          {categories.map((el, i) => (
            <button
              key={`category-btn-${i}}`}
              type="button"
              className={(i === category ? 'actived' : '')}
              onClick={() => handleChangeCategory(i)}
            >
              <span className="material-icons">{el.icon}</span>
              <div>
                <small>Comprar</small>
                <span>{el.label}</span>
              </div>
            </button>
          ))}
        </div>
      </Header>
      <Content>
        <Button
          className="searchBtn"
          onClick={toggleSearchForm}
        >
          {showSearchForm ? 'Ocultar busca' : 'Buscar veículos'}
        </Button>
        <SearchForm
          className={`searchForm ${showSearchForm && 'actived'}`}
        />
      </Content>
    </>
  );
}
