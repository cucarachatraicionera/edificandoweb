import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="about-img">
                <Image width={555} height={485} src="/images/about1.png.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h4>
                CONSTRUIMOS EL FUTURO<br />
                 EDIFICAMOS CONFIANZA
                  <br />
                  Desde 2018.
                </h4>
                <p>
                En Edificando Ingenieros S.A.S., transformamos ideas en estructuras sólidas con innovación
                  <br />
                calidad y compromiso.
                  <br /> Más que construir, creamos espacios que perduran.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About