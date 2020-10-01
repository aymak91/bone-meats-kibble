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
                        <a href="https://www.linkedin.com/in/alexanderyumak/" className="fab fa-linkedin"></a>
                        <a href="https://github.com/aymak91" className="fab fa-github-square"></a>
                        <i className="fab fa-angellist"></i>
                        </div>
                    </div>
                    </div>
                    <div className="dev-container">
                    <img className="dev-img" src={jp}></img>
                    <div className="dev-desc">
                        <h1>Jordan Phan</h1>
                        <h1> Fullstack Developer </h1>
                        <div className="dev-icons">
                        <a href="https://www.linkedin.com/in/jordanjphan/" className="fab fa-linkedin"></a>
                        <a href="https://github.com/JJPhan" className="fab fa-github-square"></a>
                        <i className="fab fa-angellist"></i>
                        </div>
                    </div>
                    </div>
                    <div className="dev-container">
                    <img className="dev-img" src={ken}></img>
                    <div className="dev-desc">
                        <h1>Kenneth Guan</h1>
                        <h1> Fullstack Developer </h1>
                        <div className="dev-icons">
                        <a href="https://www.linkedin.com/in/2702235a/" className="fab fa-linkedin"></a>
                        <a href="https://github.com/kennethguan1" className="fab fa-github-square"></a>
                        <i className="fab fa-angellist"></i>
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
                        <a href="https://www.linkedin.com/in/jaronjlee/" className="fab fa-linkedin"></a>
                        <a href="https://github.com/jaronjlee" className="fab fa-github-square"></a>
                        <i className="fab fa-angellist"></i>
                        </div>
                    </div>
                    </div>
                    <div className="dev-container">
                    <img className="dev-img" src={danyo}></img>
                    <div className="dev-desc">
                        <h1>Daniel Gu</h1>
                        <h1> Fullstack Developer </h1>
                        <div className="dev-icons">
                        <a href="https://www.linkedin.com/in/danielxgu/" className="fab fa-linkedin"></a>
                        <a href="https://github.com/DanyoGu" className="fab fa-github-square"></a>
                        <i className="fab fa-angellist"></i>
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