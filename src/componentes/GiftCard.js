import React from "react";

const GiftCard = (props) => {

    const { imagen, titulo , website} = props;


  return (
    <div className="card mb-3  d-flex justify-content-center"  style = {{ width : 300 + 'px' , height : 'auto' }} >
      <img src= {imagen} className="card-img-top " alt={titulo} />
      <div className="card-body">
  <h5 className="card-title">{titulo}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href= {website} className="btn btn-info">
          Ir a Gift
        </a>
      </div>
    </div>
  );
};

export default GiftCard;
