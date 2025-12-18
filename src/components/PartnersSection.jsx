import React from 'react';
// Varsayım: Bu komponent, yan yana dizilmiş logo görsellerini içeriyor
import BrandsLogos from '../components/BrandsLogos'; 

export default function PartnersSection() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Metin Kapsayıcısı: Ortalanmış ve Maksimum Genişlikte */}
                <div className="max-w-2xl mx-auto text-center mb-10 md:mb-16">
                    
                    {/* Başlık (H2) */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252B42] leading-tight">
                        Big Companies Are Here
                    </h2>
                    
                    {/* Paragraf (P) */}
                    <p className="mt-4 text-lg text-[#737373]">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                {/* LOGOLAR BÖLÜMÜ */}
                
                {/* PartnerLogos bileşenini çağırıyoruz. 
                   Bu bileşenin içindeki logoların da kendi içinde düzenlenmiş olması gerekir.
                */}
                <BrandsLogos />
                
            </div>
        </section>
    );
}