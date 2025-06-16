import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class SiteContentColdStorageFlooring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 1,
          text01:
            "Specialized epoxy formulations for cold environments maintain flexibility and adhesion at low temperatures, preventing cracking and delamination.",
          image: "assets/img/ServicePage/ColdStorage1.jpg",
        },
        {
          id: 2,
          text01:
            "Anti-slip aggregates are incorporated into the flooring system to ensure safety in wet, refrigerated conditions common in cold storage facilities.",
          image: "assets/img/ServicePage/ColdStorage2.jpg",
        },
        {
          id: 3,
          text01:
            "Thermal shock-resistant coatings withstand extreme temperature fluctuations from -40°F to 140°F without degradation.",
          image: "assets/img/ServicePage/ColdStorage3.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div id="site-content" className="site-content clearfix">
        <Helmet>
          <title>
            Cold Storage Flooring | Industrial Refrigeration Flooring Solutions
          </title>
          <meta
            name="description"
            content="Specialized cold storage flooring systems designed for freezer warehouses, food processing plants, and pharmaceutical storage with thermal shock resistance and anti-slip properties."
          />
          <meta name="author" content="Chem Coats" />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.chemcoats.com/cold-storage-flooring"
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
                    COLD STORAGE FLOORING
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    Engineered flooring systems specifically designed to
                    withstand sub-zero temperatures, thermal cycling, and heavy
                    equipment loads in refrigerated environments.
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
                src="assets/img/ServicePage/cold-storage-floor-coating-services.jpg"
                alt="Cold-Storage-Flooring"
                title="Cold Storage Flooring"
                className="ServiceIDpAGEiMAGE"
                style={{ height: "300px" }}
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
                  Key Features of Cold Storage Flooring:
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
                          Thermal Stability:
                        </span>
                        Specially formulated resins remain flexible at
                        temperatures as low as -40°F (-40°C) to prevent
                        cracking.
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
                          Anti-Slip Surface:
                        </span>
                        Embedded aggregates provide traction even when wet or
                        frosted over.
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
                          Moisture Resistance:
                        </span>
                        Impermeable surface prevents water infiltration and ice
                        formation within the substrate.
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
                          Chemical Resistance:
                        </span>
                        Withstands cleaning chemicals, brine solutions, and food
                        acids common in cold storage.
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
                          Heavy-Duty Load Capacity:
                        </span>
                        Supports forklift traffic up to 10,000 lbs without
                        damage.
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
                          Hygienic Surface:
                        </span>
                        Seamless, non-porous finish meets USDA and FDA
                        requirements for food storage.
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
              COLD STORAGE FLOORING TYPES
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
                  <span className="inner">Thermal Shock Resistant</span>
                </li>
                <li className="item-title">
                  <span className="inner">Anti-Slip</span>
                </li>
                <li className="item-title">
                  <span className="inner">Heavy Duty</span>
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
                          alt="Cold-Storage-Flooring"
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
                <h5 className="title">Applications:</h5>
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
                          Food Processing Plants:
                        </span>
                        Freezer rooms, blast chillers, and processing areas.
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
                          Pharmaceutical Storage:
                        </span>
                        Temperature-controlled warehouses for drug storage.
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
                          Distribution Centers:
                        </span>
                        Large-scale refrigerated warehouses for perishable
                        goods.
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
              <h5 className="title">Cold Storage Flooring Gallery:</h5>
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
                                src="assets/img/ServicePage/ColdStorage1.jpg"
                                alt="Cold-Storage-Flooring"
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
                                src="assets/img/ServicePage/ColdStorage2.jpg"
                                alt="Cold-Storage-Flooring"
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
                                src="assets/img/ServicePage/ColdStorage3.jpg"
                                alt="Cold-Storage-Flooring"
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

export default SiteContentColdStorageFlooring;
