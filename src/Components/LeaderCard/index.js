import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookF, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import "./teams.css";
export default function LeaderCard(props) {
    const {
        image,
        name,
        role,
        fb,
        lkdin,
        gthb,
        insta,
    } = props

    return (
        <div className="container">
                <div className="card">
                    <div className="content">
                        <div className="imgBx">
                            <img src={image} alt="" />
                        </div>
                        <div className="contentBx">
                            <h5>{name}</h5>
                            <h6>{role}</h6>
                        </div>
                        <div className="sci">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} color="white" /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} color="white" /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} color="white" /></a>
                            <a href="#"><FontAwesomeIcon icon={faGithub} color="white" /></a>
                        </div>
                    </div>
                </div>
            </div>
    );
}