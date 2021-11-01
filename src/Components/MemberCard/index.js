import * as React from 'react';

import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookF, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import "./teams.css";
export default function MemberCard(props) {
    const {
        key,
        image,
        name,
        role,
        fb,
        lkdin,
        gthb,
        insta,
    } = props


    console.log(props)
    return (
        <Col>
            <div className="content">
                <div className="imgBx">
                    <img src={ image } alt="" />
                </div>
                <div className="contentBx">
                    <h5>{ name }</h5>
                    <h6>{ role }</h6>
                </div>
                <div className="sci">
                    <a href={ fb }><FontAwesomeIcon icon={faFacebookF} color="white"/></a>
                    <a href={ insta }><FontAwesomeIcon icon={faInstagram} color="red"/></a>
                    <a href={ lkdin }><FontAwesomeIcon icon={faLinkedin} color="sky blue"/></a>
                    <a href={ gthb }><FontAwesomeIcon icon={faGithub} color="black"/></a>
                </div>
            </div>
        </Col>
    );
}