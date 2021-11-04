import React from 'react'
import { members } from '../mock/members'
import {teams} from "../mock/teams"
import TeamCard from "../Containers/Team/index"
import TeamLead from"../Containers/ClubLead"
import {lead} from "../mock/lead"

export default function Teams() {
    console.log(lead)
    return (
        <div className="container teams-page">
            <div className="head1"><h1 class="display-4 font-weight-bold mb-4" style={{fontWeight: 10}}>Our Team</h1></div>
            <div className="container">
               <TeamLead Lead={lead} />
            </div> 
            {teams.map(team => (
                <TeamCard Name={team.name} Lead={team.lead} Team={team.members} />
            ))}
        </div>
           
    )
}
