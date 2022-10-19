import React from 'react'
import 'bootstrap'
import '../components/styles/Faq.css'
// import icon from '../images/x.svg'

const Faq = () => {
  return (
    <div
      className='accordion accordion-flush' style={
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
      }
    }
    >
      <div style={{
        textAlign: 'center'
      }}
      >
        <h1 className='title'>Preguntas Frecuentes</h1>
      </div>
      <div
        className='accordion-item'
        style={
          {
            backgroundColor: 'black',
            width: '50%'
          }
        }
      >
        <h2 className='accordion-header' id='flush-headingOne'>
          <button
            className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne' style={
        {
          backgroundColor: '#303030',
          color: 'white'
        }
      }
          >
            ¿Qué es Netflix?
          </button>
        </h2>
        <div
          id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample' style={
             {
               backgroundColor: '#303030',
               color: 'white'
             }
        }
        >
          <div className='accordion-body'>
            Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
            <br />
            <br />
            Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
          </div>
        </div>
      </div>
      {/* ITEM 2 */}
      <div
        className='accordion-item'
        style={
          {
            backgroundColor: 'black',
            width: '50%'
          }
        }
      >
        <h2 className='accordion-header' id='flush-headingTwo'>
          <button
            className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseTwo' aria-expanded='false' aria-controls='flush-collapseTwo' style={
        {
          backgroundColor: '#303030',
          color: 'white'
        }
      }
          >
            ¿Cuanto cuesta Netflix?
          </button>
        </h2>
        <div
          id='flush-collapseTwo' className='accordion-collapse collapse' aria-labelledby='flush-headingTwo' data-bs-parent='#accordionFlushExample' style={
             {
               backgroundColor: '#303030',
               color: 'white'
             }
        }
        >
          <div className='accordion-body'>
            Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde USD7,99 hasta USD13,99 al mes. Sin costos adicionales ni contratos.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
