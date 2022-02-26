import React from "react";
import MemberCard from "../../Components/MemberCard";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import LeaderCard from "../../Components/LeaderCard";

export default function ClubLead({ Lead }) {
  console.log(Lead);
  return (
    <div>
      <LeaderCard key={Lead.id} {...Lead} />
    </div>
  );
}
