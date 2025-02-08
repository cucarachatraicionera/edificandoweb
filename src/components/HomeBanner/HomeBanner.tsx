import React from "react";
import { Parallax } from "react-parallax";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">

        <Parallax
          blur={0}
          bgImage="/images/home-banner.jpg.webp"
          bgImageAlt="home banner"
          strength={100}
          className="container-fluid banner_inner d-flex"
          contentClassName="container-fluid d-flex align-items-center"
        >
          <div className="container">
            <div className="banner_content text-center">
              <span>Hacemos realidad tus proyectos </span>
              <h3>
              con innovación y calidad
                <br />
                Con Edificando Ingenieros S.A.S.
              </h3>
             
            </div>
          </div>
        </Parallax>
     
    </section>
  );
};

export default HomeBanner;
