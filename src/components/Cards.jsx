import React from 'react'
import './styles/Cards.css';


function Cards(props){
    return (
      <div className="cards">
        <div className="container">
          <div className="row">
            <div className="col cards__info">
              <h1 className="mb-4">{props.Title}</h1>
              <h3>{props.Description}</h3>
            </div>
            <div className="col cards__tv">
              <img src={props.Tv} alt=""/>
              <div className="image__video">
                <video src={props.Video} autoPlay playsInline muted loop></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Cards;
