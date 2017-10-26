import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-info is-bold">
        <div className="hero-body">

          <div className="container has-text-centered">
            <div className="columns is-mobile">
              <div className="column is-4 is-offset-4">
                <figure className="has-text-centered">
                  <img className="image is-128x128" src="https://bulma.io/images/placeholders/128x128.png" />
                  <figcaption>
                    <h1 className="title">
                      Pawel Grynienko
                    </h1>
                    <h2 className="subtitle">
                      Javascript Developer
                    </h2>
                  </figcaption>
                </figure>
              </div>
            </div>

          </div>
        </div>
      </section>

    );
  }
}

export default Hero;
