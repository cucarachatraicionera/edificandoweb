import Image from 'next/image'
import React from 'react'

type Props = {}

const Stats = (props: Props) => {
  return (
    <section className="number-area" id="number-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-5">
          <div className="number-img">
            <Image width={368} height={462} src="/images/about2.png.webp" alt="" />
            
          </div>
        </div>
        <div className="col-md-7 col-lg-6">
          <div className="number-content">
            <h4>
            Brindamos un Servicio Personalizado Y <br />
            de Alta Calidad .
            </h4>
            <p>
            Nos especializamos en crear soluciones de construcción a medida, garantizando innovación, eficiencia y excelencia en cada proyecto.
              <br /> Si deseas que lo adaptemos a un tono más técnico, comercial
              <br /> o inspirador, dime y lo ajustamos. 🚀🏗️
            </p>
            <div className="number-wrapper">
              <div className="single-number">
                <h5>
                  <span className="counter">15</span>
                </h5>
                <p>Clientes Felices</p>
              </div>
              <div className="single-number">
                <h5>
                  <span className="counter">30</span>
                </h5>
                <p>Proyectos Echos</p>
              </div>
              <div className="single-number">
                <h5>
                  <span className="counter">9</span>/
                  <span className="counter">10</span>
                </h5>
                <p>Porcentage de Aciertos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Stats