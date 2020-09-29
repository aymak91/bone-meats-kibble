import React from 'react'
import NavBarContainer from "../nav/navbar_container";
import BackButton from "../back_button/back_button";
import { Link } from "react-router-dom";
// import Images from "../../images"
import alex from "../../images/alex.jpg"
import jaron from "../../images/jaron.jpg"
import danyo from "../../images/danyo.jpg"
import jp from "../../images/jp.jpg"
import ken from "../../images/ken.jpg"

class AboutPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div>
            <NavBarContainer />
            <div className="about-page">
                <BackButton />
                <div className="about-title">Meet the Developers</div>
                <div className="dev-info">
                <div className="left-dev">
                    <div className="dev-container">
                    <img className="dev-img" src={alex}></img>
                    <div className="dev-desc">
                        <h1>Alex Mak</h1>
                        <h1> Fullstack Developer </h1>
                        <div className="dev-icons">
                        <a href="https://www.linkedin.com/in/alexanderyumak/" class="fab fa-linkedin"></a>
                        <a href="https://github.com/aymak91" class="fab fa-github-square"></a>
                        <i class="fab fa-angellist"></i>
                        </div>
                    </div>
                    </div>
                    <div className="dev-container">
                    <img className="dev-img" src={jp}></img>
                    <div className="dev-desc">
                        <h1>Jordan Phan</h1>
                        <h1> Fullstack Developer </h1>
                        <div className="dev-icons">
                        <a href="https://www.linkedin.com/in/jordanjphan/" class="fab fa-linkedin"></a>
                        <a href="https://github.com/JJPhan" class="fab fa-github-square"></a>
                        <i class="fab fa-angellist"></i>
                        </div>
                    </div>
                    </div>
                    <div className="dev-container">
                    <img className="dev-img" src={ken}></img>
                    <div className="dev-desc">
                        <h1>Kenneth Guan</h1>
                        <h1> Fullstack Developer </h1>
                        <div className="dev-icons">
                        <a href="https://www.linkedin.com/in/2702235a/" class="fab fa-linkedin"></a>
                        <a href="https://github.com/kennethguan1" class="fab fa-github-square"></a>
                        <i class="fab fa-angellist"></i>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="right-dev">
                    <div className="dev-container">
                    <img className="dev-img" src={jaron}></img>
                    <div className="dev-desc">
                        <h1>Jaron Lee</h1>
                        <h1> Fullstack Developer </h1>
                        <div className="dev-icons">
                        <a href="https://www.linkedin.com/in/jaronjlee/" class="fab fa-linkedin"></a>
                        <a href="https://github.com/jaronjlee" class="fab fa-github-square"></a>
                        <i class="fab fa-angellist"></i>
                        </div>
                    </div>
                    </div>
                    <div className="dev-container">
                    <img className="dev-img" src={danyo}></img>
                    <div className="dev-desc">
                        <h1>Daniel Gu</h1>
                        <h1> Fullstack Developer </h1>
                        <div className="dev-icons">
                        <a href="https://www.linkedin.com/in/danielxgu/" class="fab fa-linkedin"></a>
                        <a href="https://github.com/DanyoGu" class="fab fa-github-square"></a>
                        <i class="fab fa-angellist"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        );
    }
}

export default AboutPage