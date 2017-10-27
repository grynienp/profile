import React, { Component } from 'react';
import './Hero.css'

class Hero extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-info is-bold">
        <div className="hero-body">

          <div className="container has-text-centered">

            <div className="columns">
              <div className="column is-6 is-offset-3">

                <div className="centeredimage">
                  <div className="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/256x256.png" />
                  </div>

                </div>

              </div>

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
