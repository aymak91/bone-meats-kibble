import React from "react";
import { Link } from "react-router-dom";
import alex from "../../images/alex.jpg";
import jaron from "../../images/jaron.jpg";
import danyo from "../../images/danyo.jpg";
import jp from "../../images/jp.jpg";
import ken from "../../images/ken.jpg";


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
        <div className="footer">
          <div className="idv-devs">
            <div> Alex Mak</div>
            <div className="dev-icons">
              <a href="https://www.linkedin.com/in/alexanderyumak/" className="fab fa-linkedin"></a>
              <a href="https://github.com/aymak91" className="fab fa-github-square"></a>
            </div>
          </div>
          <div className="idv-devs">
            <div> Jaron Lee</div>
            <div className="dev-icons">
                <a href="https://www.linkedin.com/in/jaronjlee/" className="fab fa-linkedin"></a>
                <a href="https://github.com/jaronjlee" className="fab fa-github-square"></a>
            </div>
          </div>
          <div className="idv-devs">
            <div> Daniel Gu</div>
            <div className="dev-icons">
                <a href="https://www.linkedin.com/in/danielxgu/" className="fab fa-linkedin"></a>
                <a href="https://github.com/DanyoGu" className="fab fa-github-square"></a>
            </div>
          </div>
          <div className="idv-devs">
            <div> Jordan Phan</div>
            <div className="dev-icons">
                <a href="https://www.linkedin.com/in/jordanjphan/" className="fab fa-linkedin"></a>
                <a href="https://github.com/JJPhan" className="fab fa-github-square"></a>
            </div>
          </div>
          <div className="idv-devs">
            <div> Kenneth Guan</div>
            <div className="dev-icons">
                <a href="https://www.linkedin.com/in/2702235a/" className="fab fa-linkedin"></a>
                <a href="https://github.com/kennethguan1" className="fab fa-github-square"></a>
            </div>
          </div>

        </div>
        )
    }
}

export default Footer