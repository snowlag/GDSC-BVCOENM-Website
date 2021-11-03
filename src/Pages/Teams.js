import React from 'react'
import MemberCard from "../Components/MemberCard"

import LeaderCard from "../Components/LeaderCard"
import { members } from '../mock/members'
import { tech1 } from '../mock/tech1'
import { tech2 } from '../mock/tech2'
import { cw } from '../mock/cw'
import { dm } from '../mock/dm'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookF, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import "../Components/MemberCard/teams.css";
const style = {
    width: 200, height: 300, padding: 5, margin: 10, borderRadius: 350, background: "#221d1d"
};
export default function Teams() {
    console.log(members)
    return (
        <div className="container">

            <div className="head1"><h1 class="display-4 font-weight-bold mb-4" style={{fontWeight: 10}}>Our Team</h1></div>
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
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} color="white" /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} color="white" /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} color="white" /></a>
                            <a href="#"><FontAwesomeIcon icon={faGithub} color="white" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="head1"><h2 class="display-4 font-weight-bold mb-4">Technical Team 1</h2></div>
            <LeaderCard
                image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/ankit_joshi.jpeg"
                name="Ankit Joshi"
                role="Technical Team 1 Lead"
                fb="#"
                lkdin="#"
                gthb="#"
                insta="#"
            />
            {tech1.map(member => (
                <Row>
                    <div className="card" style={style}>
                        <MemberCard
                            key={member.id}
                            {...member}
                        />
                    </div>
                </Row>
            ))}
            <div className="head1"><h2 class="display-4 font-weight-bold mb-4">Technical Team 2</h2></div>
            <LeaderCard

                image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/himanshu_bobade_y4rrGX3.jpg"
                name="Himanshu Bobade"
                role="Technical Team 2 Lead"
                fb="#"
                lkdin="#"
                gthb="#"
                insta="#"
            />
            {tech2.map(member => (
                <Row>
                    <div className="card" style={style}>
                        <MemberCard
                            key={member.id}
                            {...member}
                        />
                    </div>
                </Row>
            ))}
            <div className="head1"><h2 class="display-4 font-weight-bold mb-4">Digital Marketing Team</h2></div>
            <LeaderCard

                image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/mrunmayi_padwal_PGP7O5L.png"
                name="Mrunmayi Padwal"
                role="Digital Marketing Team Lead"
                fb="#"
                lkdin="#"
                gthb="#"
                insta="#"
            />
            {dm.map(member => (
                <Row>
                    <div className="card" style={style}>
                        <MemberCard
                            key={member.id}
                            {...member}
                        />
                    </div>
                </Row>
            ))}
            <div className="head1"><h2 class="display-4 font-weight-bold mb-4">Content Writing Team</h2></div>
            <LeaderCard

                image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/ayush_agrawal_5uUyRah.jpg"
                name="Ayush Agrawal"
                role="Content Writing Team Lead"
                fb="#"
                lkdin="#"
                gthb="#"
                insta="#"
            />
            {cw.map(member => (
                <Row>
                    <div className="card" style={style}>
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
