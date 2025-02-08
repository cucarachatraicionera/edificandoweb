import Image from 'next/image'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className="service-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">Lo que Ofrecemos</h3>
            <p>Construcción de calidad, diseño innovador y mantenimiento confiable para tus proyectos.</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={92} height={92} src="/images/i1.png.webp" alt="" />
                  
                </div>
                <div className="service-content">
                  <h5>Diseño Arquitectónico</h5>
                  <p>
                  Creamos espacios funcionales y estéticamente atractivos, combinando innovación y precisión en cada proyecto.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={83} height={83} src="/images/i2.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Construcción de Edificios</h5>
                  <p>
                  Desarrollamos estructuras seguras y eficientes, garantizando calidad en cada fase del proceso constructivo.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={53} height={92} src="/images/i3.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Renovación de Edificios</h5>
                  <p>
                  Modernizamos y optimizamos espacios con soluciones integrales que maximizan su valor y funcionalidad.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={82} height={82} src="/images/i4.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Mantenimiento de Edificios</h5>
                  <p>
                  Aseguramos la durabilidad de tus estructuras con servicios de mantenimiento preventivo y correctivo.
                  Si quieres que ajuste el tono o enfoque, dime y lo adaptamos. 🚀🏗️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services