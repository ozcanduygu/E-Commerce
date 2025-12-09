import React from "react";
import TeamMemberCard from "../components/TeamMemberCard";

export default function TeamPage(){
    return(
        <div className="flex flex-col font-montserrat items-center m-10"> 
            <h2 className="mb-4  font-extrabold text-[40px] text-[#252B42]">Meet Our Team</h2>
            <p className="text-[#737373]">Problems trying to resolve the conflict between 
             the two major realms of Classical physics: Newtonian mechanics </p>
            <TeamMemberCard/>
        </div>
    )
}