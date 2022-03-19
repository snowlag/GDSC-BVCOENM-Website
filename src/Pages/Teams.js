import React from "react";
import { teams } from "../mock/teams";
import { Grid } from "@mui/material";
import { lead } from "../mock/lead";
import PageIntro from "../Components/TeamIntro";
import MemberCard from "../Components/MemberCard";
import TeamCard from "../Containers/Team";
import ClubLead from "../Containers/ClubLead";

export default function Teams() {
  console.log(teams);
  return (
    <div className=" teams-page">
      <PageIntro />
      <ClubLead />

      {teams.map((team) => (
        <TeamCard
          Name={team.name}
          Team={team.members}
          Lead={team.lead}
          PrimaryColor={team.headerColor}
        />
      ))}
    </div>
  );
}
