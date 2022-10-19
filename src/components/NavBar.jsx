import React from 'react'
import logo from '../images/logo.png'
// import * as Icon from 'react-bootstrap-icons'
import './styles/NavBar.css'

class NavBar extends React.Component {
  render () {
    return (
      <header className='header pt-4'>
        <div className='container header__container'>
          <div className='row'>
            <div className='col header__image'>
              <img src={logo} alt='Logo' />
              <div className='image__gradient' />
            </div>
            <div className='col'>
              <div className='d-flex justify-content-end'>
                <select className='select globe' aria-label='Default select example' defaultValue='Español'>
                  <option>Español</option>
                  <option>English</option>
                </select>
                <a href='#' className='btn btn-danger'>Iniciar Sesion</a>
              </div>
            </div>
          </div>
          <div className='row header__title'>
            <div className='col text-center text-white header__info'>
              <h1 className='mb-2'>
                Peliculas y series ilimitadas
                <br />
                y mucho mas.
              </h1>
              <h4 className='my-4'>Disfruta donde quieras. Cancela cuando quieras.</h4>
              <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
              <div>
                <form>
                  <div className='form-group formulario'>
                    <input type='email' className='form-control input__email' placeholder='Email' />
                    <button className='btn btn-danger'>Comenzar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default NavBar
