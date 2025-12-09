import React from "react";
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";
import team5 from "../assets/team/team5.jpg";
import team6 from "../assets/team/team6.jpg";
import team7 from "../assets/team/team7.jpg";
import rebeka from "../assets/team/rebeka.jpeg";

export default function TeamMemberCard(){
    const team = [
        {id:1, name: "Jerome Bell", department: "IBM", image: team1},
        {id:2, name:"Brooklyn Simmons", department: "eBay",image: team2},
        {id:3, name:"Ronald Richards", department: "Starbucks",image: team3},
        {id:4, name: "Floyd Miles", department: "Facebook",image: team4},
        {id:5, name: "Jane Cooper", department:"Mitsubishi",image: team5},
        {id:6, name: "Robert Fox", department:"IBM",image: team6},
        {id:7, name:"Leslie Alexander", department:"The Walt Disney Company",image: team7},
        {id:8, name:"Rebeka", department:"Miyav Miyav",image: rebeka}
    ]
  return(
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {team.map((member)=>(
            <div
             key={member.id}
             className="bg-white  rounded-xl p-4 flex flex-col items-center"
            >
            <img src={member.image} alt={member.name} className="w-[240px] h-[333px] object-cover rounded-sm" />
            <h2 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{member.department}</p>
            </div>
        ))}
    </div>
  )
}