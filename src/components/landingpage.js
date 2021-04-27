import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="../ss.jpg"
            alt="profile"
            className="avatar-img"
          />

          <div className="banner-text">
            <h1>Web Developer</h1>

            <hr />

            <p>
              Web-Development | Bootstrap | JavaScript | React-js | App-Development | NODEJS
              | Express | MySQL
            </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="www.linkedin.com/in/subin-kc-05ab901b6"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="https://github.com/subin-su"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              

              {/* Youtube */}
              <a
                href="https://www.facebook.com/suben.kc.3/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
