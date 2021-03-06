import React, { useState, useEffect } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";
import logo from "../img/Icon.png";
import axios from "axios";

const NavBar = () => {
  const [city, setCity] = useState("Dayton");
  const [forecast, setForecast] = useState("?");
  const [weatherIcon, setWeatherIcon] = useState("?");
  const query = city;
  const apiKey = process.env.REACT_APP_WEATHER_KEY;
  const unit = "imperial";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  const iconUrl =
    "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
  // if (navigator.geolocation) {
  //   console.log(navigator.geolocation);
  // }

  useEffect(() => {
    const getWeather = async () => {
      const res = await axios.get(url);
      setForecast(res.data.weather[0].main);
      setWeatherIcon(res.data.weather[0].icon);
      console.log(res.data);
    };
    getWeather();
  }, []);

  return (
    <Container id="navbar" fluid className="transparent fixed-top">
      <Row>
        <div
          variant="light"
          bg="transparent"
          className=" navbar navbar-expand navbar-lightnavbar-inner"
        >
          <Col lg={4} md={4} sm={4} className="left-links">
            <div className=" nav me-auto">
              <img
                className="weatherImg "
                src={iconUrl}
                alt="weather icon"
              ></img>
              <p className="nav-link">{forecast}</p>
              <p className="nav-link">in</p>
              <p className="nav-link">{city}</p>
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} className="text-center nav-logo">
            <Navbar.Brand id="nav-name" href="#home">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              React, Redux News Agregator
            </Navbar.Brand>
          </Col>

          <Col lg={4} md={4} sm={4} className="right-links">
            <Container fluid>
              <div className=" nav me-auto justify-content-end">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </div>
            </Container>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default NavBar;
