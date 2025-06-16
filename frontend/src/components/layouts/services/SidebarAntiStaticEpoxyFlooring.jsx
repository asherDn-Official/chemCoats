import React, { Component } from "react";
import { Link } from "react-router-dom";
class SidebarAntiStaticEpoxyFlooring extends Component {
  render() {
    return (
      <div id="sidebar">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={80}
          data-mobile={0}
          data-smobile={0}
        />
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_list">
            <div className="advantagesServicePage">Advantages</div>
            <div className="inner">
              <ul className="list-wrap">
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Electrical Conductivity:</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Static Dissipation</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Durable Surface</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Chemical Resistance</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Seamless Installation</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Low Maintenance</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Hygienic Properties</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Impact Resistance</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget widget_list" style={{ background: "#e26016" }}>
            <div className="advantagesServicePage">
              Our Other Industrial Flooring Services
            </div>
            <div className="inner">
              <ul className="list-wrap">
                <li className="list-item">
                  <Link
                    to="#"
                    title="epoxy-flooring"
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    onClick={() => {
                      window.location.href = "/epoxy-flooring";
                    }}
                  >
                    <span className="text">EPOXY FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="polyurethane-flooring"
                    onClick={() => {
                      window.location.href = "/polyurethane-flooring";
                    }}
                  >
                    <span className="text">POLYURETHANE FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="di-elecric-flooring"
                    onClick={() => {
                      window.location.href = "/di-elecric-flooring";
                    }}
                  >
                    <span className="text">DI-ELECRIC FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="anti-static-epoxy-flooring"
                    onClick={() => {
                      window.location.href = "/anti-static-epoxy-flooring";
                    }}
                  >
                    <span className="text">ANTI-STATIC EPOXY FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="esd-flooring"
                    onClick={() => {
                      window.location.href = "/esd-flooring";
                    }}
                  >
                    <span className="text">ESD FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="access-floors"
                    onClick={() => {
                      window.location.href = "/access-floors";
                    }}
                  >
                    <span className="text">ACCESS FLOORS</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="car-park-deck-flooring"
                    onClick={() => {
                      window.location.href = "/car-park-deck-flooring";
                    }}
                  >
                    <span className="text">CAR PARK DECK FLOORING</span>
                  </Link>
                </li>
                {/* <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="sports-flooring"
                    onClick={() => {
                      window.location.href = "/sports-flooring";
                    }}
                  >
                    <span className="text">SPORTS FLOORING</span>
                  </Link>
                </li> */}
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="di-clean-room-flooring"
                    onClick={() => {
                      window.location.href = "/di-clean-room-flooring";
                    }}
                  >
                    <span className="text">CLEAN ROOM FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="di-heavy-duty-epoxy-flooring"
                    onClick={() => {
                      window.location.href = "/di-heavy-duty-epoxy-flooring";
                    }}
                  >
                    <span className="text">HEAVY DUTY EPOXY FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="di-hygiene-flooring"
                    onClick={() => {
                      window.location.href = "/di-hygiene-flooring";
                    }}
                  >
                    <span className="text">HYGIENE FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="di-self-leveling-epoxy-flooring"
                    onClick={() => {
                      window.location.href = "/di-self-leveling-epoxy-flooring";
                    }}
                  >
                    <span className="text">SELF LEVELLING EPOXY FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="cold-storage-flooring"
                    onClick={() => {
                      window.location.href = "/cold-storage-flooring";
                    }}
                  >
                    <span className="text">COLD STORAGE FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="acid-resistance-flooring"
                    onClick={() => {
                      window.location.href = "/acid-resistance-flooring";
                    }}
                  >
                    <span className="text">ACID RESISTANCE FLOORING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="car-park-coating"
                    onClick={() => {
                      window.location.href = "/car-park-coating";
                    }}
                  >
                    <span className="text">CAR PARK COATING</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                    to="#"
                    title="di-expanison-joints"
                    onClick={() => {
                      window.location.href = "/di-expanison-joints";
                    }}
                  >
                    <span className="text">EXPANSION JOINTS</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="widget widget_help align-center has-shadow no-sep has-border border-solid">
            <div className="inner">
              <h2 className="widget-title margin-bottom-14">
                <span>HOW CAN WE HELP ?</span>
              </h2>
              <p className="text line-height-26 margin-bottom-23">
                Are you interested in finding out how we can make your project.
                Please email us.
              </p>
              <div className="elm-button">
                <Link to="#" className="themesflat-button bg-accent pd30">
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div> */}
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    );
  }
}

export default SidebarAntiStaticEpoxyFlooring;
