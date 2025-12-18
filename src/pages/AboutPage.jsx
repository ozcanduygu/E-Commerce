import React from "react";
// ... (Diğer tüm importlar)
import AboutHeader from "../components/AboutHeader";
import AboutHero from "../components/AboutHero";
import AboutInfo from "../components/AboutInfo";
import StatisticsSection from "../components/StatisticsSection";
import VideoPreview from "../components/VideoPreview";
import TeamMemberCard from "../components/TeamMemberCard";
import PartnersSection from "../components/PartnersSection";
import ContactPage from "./ContactPage";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import MiniFooter from "../components/MiniFooter";
export default function AboutPage(){
    return(
        <div>
            <AboutHeader/>
            <AboutHero/>
            <AboutInfo/>
            <StatisticsSection/>
            <VideoPreview/>
            
            {/* GÜNCELLENMİŞ KAPSAYICI */}
            <div className="flex flex-col items-center py-10">
                
                {/* Metin bloğu için ayrı bir kapsayıcı ekliyoruz. 
                    Bu, metnin ortalanmasını ve maksimum genişliğini kontrol eder. 
                */}
                <div className="max-w-xl text-center mx-auto mb-8">
                    <h4 className="text-2xl font-bold text-gray-800">Meet our team</h4>
                    <p className="text-[#737373] mt-2">
                        Problems trying to resolve the conflict between 
                        the two major realms of Classical physics: Newtonian mechanics 
                    </p>
                </div>
                
                {/* TeamMemberCard zaten kendi içinde ortalama ve grid yapısını yönetiyor.
                    Bu yapı, kartların ortalanması için mükemmeldir.
                    (TeamMemberCard'ın içindeki .p-10 grid... sınıfı, kartları ortalayacaktır.)
                */}
                <TeamMemberCard maxMembers={3} showSocial={true}/>
                <PartnersSection/>
                <ContactPage/>
                <FooterBanner/>
                <Footer/>
                <MiniFooter/>
            </div>
            
        </div>
    )
}