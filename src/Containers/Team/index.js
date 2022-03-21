import React from "react";
import { Grid, Typography } from "@mui/material";
import MemberCard from "../../Components/MemberCard";
import TeamLeadCard from "../../Components/TeamLeadCard";
import "./index.css";
import { textAlign } from "@mui/system";
export default function TeamCard({ Name, Lead, Team, PrimaryColor }) {
  return (
    <>
      <div className="team-card ">
        <div className="team-header fadeOutOnce">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom="true"
            color="white"
            sx={{
              fontFamily: "Poppins",
              fontSize: "3rem",
              textAlign: "center",
            }}
          >
            {Name}
          </Typography>
        </div>
        <TeamLeadCard
          name={Lead.name}
          role={Lead.role}
          primaryColor={PrimaryColor}
          image={Lead.image}
        />
        <Grid container spacing={1}>
          {Team &&
            Team.map((member) => (
              <Grid item xs={12} md={4} lg={4}>
                <MemberCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  primaryColor={PrimaryColor}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
}
