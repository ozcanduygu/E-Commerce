import React from "react";
// ... (Tüm resim importları aynı kalıyor)
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";
import team5 from "../assets/team/team5.jpg";
import team6 from "../assets/team/team6.jpg";
import team7 from "../assets/team/team7.jpg";
import rebeka from "../assets/team/rebeka.jpeg";

// Lucide ikonlarını kullanarak sosyal medya ikonları ekleyelim (Projenizde kurulu olduğunu varsayıyorum)
import { Facebook, Twitter, Linkedin } from 'lucide-react'; 

// Yeni props'lar: maxMembers ve showSocial
export default function TeamMemberCard({ maxMembers, showSocial = false }) {
    
    // Tüm ekip verisi
    const fullTeam = [
        { id: 1, name: "Jerome Bell", department: "IBM", image: team1 },
        { id: 2, name: "Brooklyn Simmons", department: "eBay", image: team2 },
        { id: 3, name: "Ronald Richards", department: "Starbucks", image: team3 },
        { id: 4, name: "Floyd Miles", department: "Facebook", image: team4 },
        { id: 5, name: "Jane Cooper", department: "Mitsubishi", image: team5 },
        { id: 6, name: "Robert Fox", department: "IBM", image: team6 },
        { id: 7, name: "Leslie Alexander", department: "The Walt Disney Company", image: team7 },
        { id: 8, name: "Rebeka", department: "Miyav Miyav", image: rebeka }
    ];

    // maxMembers prop'una göre üyeleri dilimle
    // Eğer maxMembers tanımsızsa veya 0 ise, tüm takımı kullanırız.
    const teamToDisplay = maxMembers > 0 ? fullTeam.slice(0, maxMembers) : fullTeam;

    // About sayfasında 3 tane yan yana gösterileceği için grid düzenini değiştirebiliriz
    // Ancak TeamPage'de 4 tane gösterildiği için, buradaki grid yapısını en esnek haliyle bırakalım:
    // Örneğin, 4'e kadar esnek bir yapı:
    const gridLayout = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-5xl">
            {teamToDisplay.map((member) => (
                <div
                    key={member.id}
                    className="bg-white rounded-xl p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
                >
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-[240px] h-[333px] object-cover rounded-sm" 
                    />
                    <h2 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h2>
                    <p className="text-gray-500 text-sm mt-1">{member.department}</p>
                    
                    {/* SOSYAL MEDYA İKONLARI - showSocial prop'una bağlı olarak gösterilir */}
                    {showSocial && (
                        <div className="flex space-x-3 mt-3">
                            <a href={`#${member.name}-fb`} aria-label="Facebook">
                                <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-800" />
                            </a>
                            <a href={`#${member.name}-tw`} aria-label="Twitter">
                                <Twitter className="w-5 h-5 text-blue-400 hover:text-blue-600" />
                            </a>
                            <a href={`#${member.name}-li`} aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5 text-blue-800 hover:text-blue-900" />
                            </a>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}