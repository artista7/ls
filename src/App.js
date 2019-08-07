import React from 'react';
import logo from './logo.svg';
import './App.scss';        //bulma
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const Hoverable = styled.div`
  &:hover {
    cursor: pointer
  }
`

const Cognito = function ({ }) {
  return (
    <Hoverable className="card">
      <div className="card-content has-background-warning">
        <a href="https://cognito.learning-sage.com" target="_blank">
          <div className="content" style={{ height: "200px", display: "flex", flexDirection: 'column' }}>
            <h1>Cognito</h1>
            <p>A standardized placement portal for colleges</p>
          </div>
        </a>
      </div>
    </Hoverable>)
}
const Zook = function ({ }) {
  return (
    <Hoverable className="card">
      <div className="card-content has-background-danger">
        <a href="https://zook.learning-sage.com" target="_blank">
          <div className="content" style={{ height: "200px", display: "flex", flexDirection: 'column' }}>
            <h1>Zook</h1>
            <p>Make your resume in a flash</p>
          </div>
        </a>
      </div>
    </Hoverable>)
}
const Bootcamp = function ({ }) {
  return (
    <Hoverable className="card">
      <div className="card-content has-background-primary">
        <a href="https://bootcamp.learning-sage.com" target="_blank">
          <div className="content" style={{ height: "200px", display: "flex", flexDirection: 'column' }}>
            <h1>Bootcamp</h1>
            <p>Our placement bootcamp services catering to awareness gaps in student placements</p>
          </div>
        </a>
      </div>
    </Hoverable>)
}
const Scheduler = function ({ }) {
  return (
    <Hoverable className="card">
      <div className="card-content has-background-light">
        <a href="https://scheduler.learning-sage.com" target="_blank">
          <div className="content" style={{ height: "200px", display: "flex", flexDirection: 'column' }}>
            <h1>Scheduler</h1>
            <p>Our engine to schedule interviews during placements</p>
          </div>
        </a>
      </div>
    </Hoverable>)
}


function App() {
  return (
    <section className="hero is-dark is-bold is-fullheight">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <span className="is-size-4" style={{ fontFamily: "pacifico" }}>Cognito</span>
              </a>
              <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active" href="https://medium.com/learning-sage" target="_blank">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-3 is-offset-1">
              <Cognito />
            </div>
            <div className="column is-3">
              <Zook />
            </div>
            <div className="column is-3">
              <Bootcamp />
            </div>
            {/* <div className="column is-3">
              <Scheduler />
            </div> */}
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <span className="is-size-7">learning-Sage <span><i className='fa fa-copyright'></i></span> 2019. All Rights Reserved.</span>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default App;