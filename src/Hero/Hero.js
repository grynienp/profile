import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './Hero.css'
import pawel from '../pawel.svg';

class Hero extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-info is-bold">
        <Particles className='particles'
          params={{
            particles: {
              number: {
                value: 95,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            }
          }}
        />
        <div className="hero-body">
          <div className="container has-text-centered">

            <div className="centeredimage">
              <img src={pawel} />
            </div>

            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h1 className="title">
                  Pawel Grynienko
                </h1>
                <h2 className="subtitle">
                  Javascript Developer
                </h2>
              </div>
            </div>

          </div>
        </div>
      </section>

    );
  }
}

export default Hero;
