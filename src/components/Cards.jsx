import React from 'react'
import './styles/Cards.css';
import Tv from '../images/tv.png';
import VideoTv from '../images/videoTv.m4v';
import Phone from '../images/mobile.jpg';
import PhonePic from '../images/phone_pic.png';
import Tv_2 from '../images/tv_2.png';
import VideoTv_2 from '../images/videoTv_2.m4v';

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="cards__tv mt-2">
          <div className="container mb-5">
            <div className="row">
              <div className="col cards__info">
                <h1 className="mb-4">Disfruta en tu TV.</h1>
                <h3>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</h3>
              </div>
              <div className="col cards__tv">
                <img src={Tv} alt=""/>
                <div className="image__video_1">
                  <video src={VideoTv} autoPlay playsInline muted loop></video>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cards__phone mt-2">
          <div className="container">
            <div className="row cards__phone-info">
              <div className="col cards__info">
                <h1 className="mb-4">Descarga tus series para verlas offline.</h1>
                <h3>Guarda tu contenido favorito y ten siempre algo para ver.</h3>
              </div>
              <div className="col img__phone mb-5 mr-4">
                <img src={Phone} alt=""/>
                <div className="phone__info">
                  <div className="img__container-phone m-2">
                    <img src={PhonePic} alt=""/>
                  </div>
                  <div className="info__container mr-2">
                    <p>Stranger Things</p>
                    <span>Descargando...</span>
                  </div>
                  <div className="phone__gif">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cards__tv2 mt-2">
          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col cards__info--tv2">
                <h1 className="mb-4">Disfruta donde quieras.</h1>
                <h3>Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo extra.</h3>
              </div>
              <div className="col cards__tv2">
                <img src={Tv_2} alt=""/>
                <div className="image__video_2">
                  <video src={VideoTv_2} autoPlay playsInline muted loop></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

export default Cards;
