import React from 'react';
import { Play } from 'lucide-react';
import manzara from '../assets/manzara.webp';
export default function VideoPreview() {
    return (
    
        <div className="max-w-3xl mx-auto my-10 shadow-xl rounded-xl overflow-hidden">
            
            {/* GÖRSEL ALANI: "relative" ile Play tuşunun konumlandırılması sağlanır */}
            <div className="relative cursor-pointer group">
                
                {/* 1. Arka Plan Görseli */}
                <img
                    src={manzara} 
                    alt="Video Önizlemesi"
                    // Görselin genişlik ve yüksekliği (w-full ve aspectRatio ile dikdörtgen form)
                    className="w-full aspect-[16/9] object-cover transition-opacity duration-500 group-hover:opacity-80"
                />

                {/* 2. PLAY BUTONU ve ETKİLEŞİM */}
                
                {/* Karartma katmanı (Opsiyonel: Hafif karartma sağlar) */}
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition duration-300"></div>

                {/* Play Butonu Kapsayıcısı: Ortalanmış */}
                <button
                    aria-label="Videoyu Oynat"
                    // 'absolute inset-0' ile tüm alanı kaplar, flex ile içeriği tam ortalar
                    className="absolute inset-0 flex items-center justify-center focus:outline-none"
                    onClick={() => console.log("Video Oynatıldı!")} 
                >
                    {/* Play Düğmesi: Mavi Tam Yuvarlak Arka Plan */}
                    <div 
                        className="p-4 sm:p-5 bg-[#23A6F0] rounded-full 
                                    transform transition duration-300 ease-in-out 
                                    scale-100 group-hover:scale-110 shadow-2xl hover:bg-blue-700"
                    >
                        {/* Play İkonu (Lucide): İçi Beyaz */}
                        <Play 
                            className="w-8 h-8 sm:w-10 sm:h-10 text-white" 
                            fill="currentColor" // Üçgenin içini doldurur
                        />
                    </div>
                </button>
            </div>
        </div>
    );
}