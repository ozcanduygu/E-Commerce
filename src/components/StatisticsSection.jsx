import React from 'react';

export default function StatisticsSection() {
    // İstatistik verileri (Artık renk bilgisi içermiyor)
    const stats = [
        {
            value: "15K",
            label: "Happy Customers",
        },
        {
            value: "150K",
            label: "Monthly Visitors",
        },
        {
            value: "15",
            label: "Countries Worldwide",
        },
        {
            value: "100+",
            label: "Top Partners",
        },
    ];

    return (
        <section className="py-12 md:py-16 bg-white-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Ana Kapsayıcı: Dört Sütunlu Düzen (Grid) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center p-4 bg-white transition duration-300">
                            
                            {/* Değer (H1): Sadece Siyah (varsayılan) veya Koyu Gri */}
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-1 leading-none">
                                {stat.value}
                            </h1>
                            
                            {/* Açıklama (H5): Orta Gri */}
                            <h5 className="text-sm sm:text-base font-medium text-gray-500 tracking-wider">
                                {stat.label}
                            </h5>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}