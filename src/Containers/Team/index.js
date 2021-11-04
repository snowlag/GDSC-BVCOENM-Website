import React from 'react'
import LeaderCard from '../../Components/LeaderCard'
import MemberCard from '../../Components/MemberCard'
import { Row, Col } from 'react-bootstrap';
const style = {
    width: 200, height: 300, padding: 5, margin: 10, borderRadius: 350, background: "#221d1d"
};
export default  function TeamCard ({Name , Lead , Team}) {
    return (
        <>
            <div className="head1"><h2 class="display-4 font-weight-bold mb-4">{Name}</h2></div>
            <LeaderCard
                image={Lead.image}
                name={Lead.name}
                role={Lead.role}
                fb={Lead.role}
                lkdin={Lead.lkdin}
                gthb={Lead.gthb}
                insta={Lead.insta}
            />
           
            {Team.map(member => (
                 <Row>
                    <div className="card" style={style}>
                        <MemberCard
                            key={member.id}
                            {...member}
                        />
                    </div>
                </Row>
            ))}
            
        </>
    )
}
