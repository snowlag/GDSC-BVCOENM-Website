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

    return (
        <Col>
            <div className="content">
                <div className="imgBx" style={{width: 135, height: 135, marginBottom: 20}}>
                    <img src="https://img.freepik.com/free-vector/man-profile-cartoon_18591-58484.jpg?size=338&ext=jpg" alt="" />
                </div>
                <div className="contentBx">
                    <h5 style={{fontSize: 21}}>{ name }</h5>
                    <h6 style={{fontSize: 12}}>{ role }</h6>
                </div>
                <div className="sci" style={{marginTop: 10, marginBottom: 20}}>
                    <a href={ insta }><FontAwesomeIcon icon={faInstagram} size="xs" color="white"/></a>
                    <a href={ lkdin }><FontAwesomeIcon icon={faLinkedin} size="xs" color="white"/></a>
                    <a href={ gthb }><FontAwesomeIcon icon={faGithub} size="xs" color="white"/></a>
                </div>
            </div>
        </Col>
    );
}