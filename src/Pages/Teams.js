import React from 'react'
import MemberCard from "../Components/MemberCard"
import { members } from '../mock/members'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookF, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import "../Components/MemberCard/teams.css";

export default function Teams() {
    console.log(members)
    return (
        <div className="container">
            
            <div className="head1"><h1 class="display-4 font-weight-bold mb-4">Our Team</h1></div>
            <div className="container">
            <div className="card">
            <div className="content">
                <div className="imgBx">
                    <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/mayuresh_kulkarni_c4xNZhB.jpg" alt="" />
                </div>
                <div className="contentBx">
                    <h5>Mayuresh Kulkarni</h5>
                    <h6>GDSC Lead</h6>
                </div>
                <div className="sci">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} color="white"/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} color="white"/></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} color="white"/></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} color="white"/></a>
                </div>
            </div>
            </div>
            </div>
            
            
            {members.map(member => (
                <Row>
                <div className="card">
                    <MemberCard
                        key={member.id}
                        {...member}
                    />
                </div>
                </Row>
            ))}
        </div>
    )
}
