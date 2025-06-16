import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class SiteContentCarParkCoating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 1,
          text01:
            "Epoxy coatings are widely used in car park applications due to their high durability and chemical resistance. Bisphenol A epoxy resin offers excellent adhesion to concrete surfaces, making it ideal for heavy traffic environments such as parking garages and ramps. Its thick consistency provides good protection against oil spills, tire marks, and wear.",
          image: "assets/img/ServicePage/Bisphenol-A.jpg",
        },
        {
          id: 2,
          text01:
            "Bisphenol F epoxy resins have lower viscosity than Bisphenol A, allowing for better penetration into concrete substrates. This makes them suitable for areas requiring seamless, high-performance coatings that resist staining and moisture ingress. They are often chosen for sloped or multi-level car parks where water runoff is a concern.",
          image: "assets/img/ServicePage/Bisphenol-F.jpg",
        },
        {
          id: 3,
          text01:
            "Novolac-based epoxy coatings offer superior chemical resistance and thermal stability. These coatings are often applied in industrial car parks or loading zones where exposure to aggressive chemicals and heavy mechanical stress is expected. Their tight crosslink density ensures long-term performance under harsh conditions.",
          image: "assets/img/ServicePage/Novolac.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div id="site-content" className="site-content clearfix">
        <Helmet>
          <title>
            Car Park Coating | Durable Epoxy Flooring for Parking Areas
          </title>
          <meta
            name="description"
            content="High-performance car park coatings protect concrete surfaces from wear, chemicals, and weathering. Ideal for commercial, residential, and industrial parking structures."
          />
          <meta name="author" content="Your Company Name" />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.chemcoats.com/car-park-coating"
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
                    CAR PARK COATING
                  </h1>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    Car park coatings offer durable protection for concrete
                    surfaces in high-traffic environments. Designed to withstand
                    constant vehicle movement, weather exposure, and chemical
                    contact, these coatings enhance safety, aesthetics, and
                    longevity.
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
                src="assets/img/ServicePage/intermediate-deck-car-park-coating.jpg"
                alt="Car Park Coating"
                title="Car Park Coating"
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
                <h5 className="title">Why Car Park Coatings Are Important</h5>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        <strong>Surface Protection:</strong> Prevents concrete
                        degradation from tire abrasion, oil leaks, and weather
                        exposure.
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
                        <strong>Chemical Resistance:</strong> Resists oil,
                        grease, brake fluids, and cleaning agents commonly found
                        in parking areas.
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
                        <strong>Slip Resistance:</strong> Anti-slip formulations
                        improve safety in wet or oily conditions.
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
                        <strong>Durability:</strong> Withstands continuous
                        vehicle traffic without chipping or peeling.
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
                        <strong>Aesthetic Appeal:</strong> Available in various
                        colors and finishes to enhance visual appeal and
                        directional guidance.
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
                        <strong>Low Maintenance:</strong> Easy to clean and
                        maintain, reducing long-term operational costs.
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
                        <strong>UV Stability:</strong> UV-resistant options
                        prevent fading and surface breakdown from sunlight
                        exposure.
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
            <h5 className="title">Types of Epoxy Composition</h5>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={27}
              data-mobile={27}
              data-smobile={27}
            />
            <div className="themesflat-tabs style-2 title-w170 clearfix">
              <ul className="tab-title clearfix">
                <li className="item-title active">
                  <span className="inner">Bisphenol A</span>
                </li>
                <li className="item-title">
                  <span className="inner">Bisphenol F</span>
                </li>
                <li className="item-title">
                  <span className="inner">Novolac</span>
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
                          alt="Car Park Coating Epoxy Type"
                          className="serviceImaGEMAPDIV"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />

          <div className="flat-content-wrap style-2 clearfix">
            <h5 className="title">Key Applications of Car Park Coatings</h5>
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
                  <span className="text">Multi-story parking garages</span>
                </span>
              </div>
            </div>
            <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
              <div className="inner">
                <span className="item">
                  <span className="icon">
                    <i className="fa fa-check-circle" />
                  </span>
                  <span className="text">Underground parking facilities</span>
                </span>
              </div>
            </div>
            <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
              <div className="inner">
                <span className="item">
                  <span className="icon">
                    <i className="fa fa-check-circle" />
                  </span>
                  <span className="text">Airport terminals and hangars</span>
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
                    Shopping mall and retail parking lots
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
                    Residential complexes with underground parking
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
                    Industrial warehouses with internal vehicle access
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />

          {/* Image Slider */}
          <div className="row-services">
            {/* <div className="container">
              <h5 className="title">Car Park Coating Gallery:</h5>
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
                                src="assets/img/ServicePage/car-park-coating-1.jpg"
                                alt="Car Park Coating"
                                title="Car Park Coating"
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
                                src="assets/img/ServicePage/car-park-coating-2.jpg"
                                alt="Car Park Coating"
                                title="Car Park Coating"
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
                                src="assets/img/ServicePage/car-park-coating-3.jpg"
                                alt="Car Park Coating"
                                title="Car Park Coating"
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

export default SiteContentCarParkCoating;
