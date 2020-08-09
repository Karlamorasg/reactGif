import React from 'react';

const Search = (props) => {

  const {getGif} = props;

  const handlerEvent = (evento) => {
          getGif(evento.target.value);

  }
    return (
        <div className="input-group mb-3 mt-5">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Buscar Gift</span>
        </div>
        <input  onChange = {handlerEvent} type="text" className="form-control" placeholder="Busca un gif" aria-label="Busca un gif" aria-describedby="basic-addon1" />
      </div>
    )
}

export default Search;
