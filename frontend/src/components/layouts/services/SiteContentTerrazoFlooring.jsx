import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class SiteContentAcidResistanceFlooring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 1,
          text01:
            "Vinyl ester resin flooring provides superior acid resistance, particularly against strong mineral acids and solvents. These systems are ideal for chemical processing plants, battery manufacturing facilities, and wastewater treatment plants where exposure to harsh acids is constant.",
          image: "assets/img/ServicePage/AcidResistance1.jpg",
        },
        {
          id: 2,
          text01:
            "Novolac epoxy flooring offers exceptional resistance to both acids and high temperatures (up to 150°C). These systems are commonly used in pharmaceutical manufacturing, metal finishing plants, and food processing facilities where hot acid solutions are present.",
          image: "assets/img/ServicePage/AcidResistance2.jpg",
        },
        {
          id: 3,
          text01:
            "Polyurethane cement flooring combines chemical resistance with mechanical durability. These systems are particularly effective against organic acids and alternating wet/dry conditions found in dairy processing, breweries, and chemical storage areas.",
          image: "assets/img/ServicePage/AcidResistance3.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div id="site-content" className="site-content clearfix">
        <Helmet>
          <title>
            Acid Resistance Flooring | Chemical Resistant Floor Systems
          </title>
          <meta
            name="description"
            content="Specialized acid resistance flooring solutions for industrial environments. Our chemical-resistant floor systems withstand harsh acids, solvents, and extreme conditions while maintaining structural integrity."
          />
          <meta name="author" content="Chem Coats" />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.chemcoats.com/acid-resistance-flooring"
          />
        </Helmet>

        <div id="inner-content" className="inner-content-wrap">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={60}
            data-smobile={60}
          />

          <div className="themesflat-row equalize sm-equalize-auto clearfix">
            <div className="span_1_of_6 bg-f7f">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={60}
                data-mobile={60}
                data-smobile={60}
              />
              <div
                className="themesflat-content-box clearfix"
                data-margin="0 10px 0 43px"
                data-mobilemargin="0 15px 0 15px"
              >
                <div className="themesflat-headings style-2 clearfix">
                  <h1 className="heading font-size-28 line-height-39">
                    ACID RESISTANCE FLOORING
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    Engineered flooring systems specifically designed to
                    withstand corrosive acids, harsh chemicals, and extreme
                    industrial environments while maintaining structural
                    integrity and safety.
                  </p>
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={56}
                data-mobile={56}
                data-smobile={56}
              />
            </div>

            <div className="span_1_of_6 half-background style-2">
              <img
                src="assets/img/ServicePage/acid-resistant-paint-featured.jpg"
                alt="Acid-Resistance-Flooring"
                title="Acid Resistance Flooring"
                className="ServiceIDpAGEiMAGE"
              />
            </div>
          </div>

          <div
            className="themesflat-spacer clearfix"
            data-desktop={39}
            data-mobile={39}
            data-smobile={39}
          />

          <div className="flat-content-wrap style-2 clearfix">
            <div className="item" style={{ width: "100%" }}>
              <div className="inner">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={10}
                  data-mobile={10}
                  data-smobile={10}
                />
                <h5 className="title">
                  Key Features of Acid Resistance Flooring:
                </h5>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={8}
                  data-mobile={8}
                  data-smobile={8}
                />

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Chemical Resistance:
                        </span>
                        Withstands exposure to sulfuric acid, hydrochloric acid,
                        nitric acid, and other corrosive chemicals at varying
                        concentrations.
                      </span>
                    </span>
                  </div>
                </div>

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Seamless Surface:
                        </span>
                        Eliminates joints where acids could penetrate, providing
                        complete protection against chemical infiltration.
                      </span>
                    </span>
                  </div>
                </div>

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Thermal Stability:
                        </span>
                        Maintains integrity in temperature extremes from -40°F
                        to 300°F (-40°C to 150°C).
                      </span>
                    </span>
                  </div>
                </div>

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Mechanical Strength:
                        </span>
                        High compressive strength (up to 10,000 psi) resists
                        impact from heavy equipment and dropped tools.
                      </span>
                    </span>
                  </div>
                </div>

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Slip Resistance:
                        </span>
                        Textured surfaces maintain traction even when wet with
                        acidic solutions.
                      </span>
                    </span>
                  </div>
                </div>

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Hygienic Properties:
                        </span>
                        Non-porous surface prevents bacterial growth and meets
                        FDA/USDA requirements for food processing.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />

          {/* <div className="flat-content-wrap style-2 clearfix">
            <h5 className="title no-letter-spacing">
              ACID RESISTANCE FLOORING TYPES
            </h5>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={27}
              data-mobile={27}
              data-smobile={27}
            />

            <div className="themesflat-tabs style-2 title-w170 clearfix">
              <ul className="tab-title clearfix">
                <li className="item-title active">
                  <span className="inner">Vinyl Ester</span>
                </li>
                <li className="item-title">
                  <span className="inner">Novolac Epoxy</span>
                </li>
                <li className="item-title">
                  <span className="inner">Polyurethane</span>
                </li>
              </ul>

              <div className="tab-content-wrap clearfix">
                {this.state.tabs.map((data) => (
                  <div className="tab-content" key={data.id}>
                    <div className="item-content">
                      <p>{data.text01}</p>
                      <div className="servicePageImagemap">
                        <img
                          src={data.image}
                          alt="Acid-Resistance-Flooring"
                          className="serviceImaGEMAPDIV"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <div className="flat-content-wrap style-2 clearfix">
            <div className="item" style={{ width: "100%" }}>
              <div className="inner">
                <h5 className="title">Industrial Applications:</h5>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={8}
                  data-mobile={8}
                  data-smobile={8}
                />

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Chemical Processing:
                        </span>
                        Reactor areas, mixing rooms, and storage zones in
                        chemical manufacturing plants.
                      </span>
                    </span>
                  </div>
                </div>

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Pharmaceutical:
                        </span>
                        API production areas, solvent recovery zones, and
                        cleanrooms requiring chemical resistance.
                      </span>
                    </span>
                  </div>
                </div>

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Metal Finishing:
                        </span>
                        Electroplating shops, anodizing lines, and pickling
                        areas with acid exposure.
                      </span>
                    </span>
                  </div>
                </div>

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Battery Manufacturing:
                        </span>
                        Lead-acid and lithium battery production facilities with
                        acid electrolyte exposure.
                      </span>
                    </span>
                  </div>
                </div>

                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <span style={{ fontWeight: "500", color: "#000" }}>
                          Food Processing:
                        </span>
                        CIP (Clean-in-Place) areas, fermentation rooms, and
                        processing zones with acid cleaners.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />

          <div className="row-services">
            {/* <div className="container">
              <h5 className="title">Acid Resistance Flooring Gallery:</h5>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={10}
                data-mobile={10}
                data-smobile={10}
              />

              <div className="row">
                <div className="col-md-12">
                  <div
                    className="themesflat-carousel-box data-effect clearfix"
                    data-gap={30}
                    data-column={3}
                    data-column2={2}
                    data-column3={1}
                    data-auto="true"
                  >
                    <div className="owl-carousel owl-theme">
                      <div className="themesflat-image-box style-2 clearfix">
                        <div className="image-box-item">
                          <div className="inner">
                            <div className="thumb data-effect-item">
                              <img
                                src="assets/img/ServicePage/AcidResistance1.jpg"
                                alt="Acid-Resistance-Flooring"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="themesflat-image-box style-2 clearfix">
                        <div className="image-box-item">
                          <div className="inner">
                            <div className="thumb data-effect-item">
                              <img
                                src="assets/img/ServicePage/AcidResistance2.jpg"
                                alt="Acid-Resistance-Flooring"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="themesflat-image-box style-2 clearfix">
                        <div className="image-box-item">
                          <div className="inner">
                            <div className="thumb data-effect-item">
                              <img
                                src="assets/img/ServicePage/AcidResistance3.jpg"
                                alt="Acid-Resistance-Flooring"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={60}
            data-smobile={60}
          />
        </div>
      </div>
    );
  }
}

export default SiteContentAcidResistanceFlooring;
