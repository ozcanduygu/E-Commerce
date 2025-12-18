import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// Axios instance'ınızın doğru import edildiğini varsayıyoruz
import axios from  "../api/axiosInstance.js"; 

// --- RegEx Kural Tanımları (Okunurluk için dışarı taşıdım) ---
const phoneRegex = /^(\+90|0)?5\d{9}$/; 
const taxNoRegex = /^T\d{4}V\d{6}$/; 
const // Güçlü parola kuralı (daha önceki istemlere göre): 
// Min 8 karakter, B/k Harf, Rakam, Özel Karakter
strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
// -----------------------------------------------------------

export default function SignUpForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onTouched" // Alanı terk edince doğrulama yapsın
    });
    const dispatch = useDispatch();

    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null); // API hataları için

    const selectedRoleId = watch("role_id");
    const passwordWatch = watch("password"); // Şifre eşleştirme için izleniyor

    // Rolleri Çekme
    useEffect(() => {
        axios.get("/roles")
            .then(response =>{
                setRoles(response.data);
            })
            .catch(error=>{
                console.error("Roller çekilirken hata:", error);
                setApiError("Roller yüklenemedi.");
            })
    }, []);

    // Form Gönderimi
    const onSubmit = async (data) => {
        dispatch({ type: "TEST_ACTION" });

        setLoading(true);
        setApiError(null); 

        // API'ye gönderilecek veriyi temizleme/formatlama
        const { confirm_password, ...dataToSend } = data;
        
        // Mağaza rolü değilse (Örn: role_id 2 mağaza değilse), 'store' objesini çıkar.
        if (selectedRoleId !== "2" && dataToSend.store) {
            delete dataToSend.store;
        }
        
        try {
            const response = await axios.post("/signup", dataToSend);
            alert("Kayıt Başarılı: " + response.data.message);
            // Yönlendirme mantığınızı buraya ekleyebilirsiniz (örn: history.push('/login'))
        }
        catch (error) {
            console.error("API Kayıt Hatası:", error.response || error);
            const errorMessage = error.response?.data?.message || "Beklenmeyen bir hata oluştu.";
            setApiError(errorMessage);
        }
        finally {
            setLoading(false);
        }
    }

    // --- Tailwind CSS ile Stil ve Düzenleme ---
    return (
        // Sayfa ortalama ve temel arka plan
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            
            {/* Ana Form Kapsayıcısı (Kart Görünümü) */}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md space-y-6">
                
                <h2 className="text-2xl font-bold text-gray-800 text-center">Kullanıcı Kayıt Formu</h2>

                {/* Genel Hata Mesajı */}
                {apiError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm">
                        {apiError}
                    </div>
                )}

                {/* 1. İSİM */}
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">İsim:</label>
                    <input type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                        {...register("name", { required: "İsim zorunludur" })} 
                    />
                    {errors.name && <span className="text-red-600 text-xs">{errors.name.message || "İsim zorunludur"}</span>}
                </div>

                {/* 2. E-POSTA */}
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                        {...register("email", { 
                            required: "Email zorunludur",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Geçerli bir e-posta girin"
                            }
                        })} 
                    />
                    {errors.email && <span className="text-red-600 text-xs">{errors.email.message}</span>}
                </div>
                
                {/* 3. PAROLA */}
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Parola:</label>
                    <input type="password" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                        {...register("password", { 
                            required: "Parola zorunludur", 
                            pattern: {
                                value: strongPasswordRegex,
                                message: "Min 8 karakter (B/k Harf, Rakam, Özel Karakter) gereklidir."
                            }
                        })} 
                    />
                    {errors.password && <span className="text-red-600 text-xs">{errors.password.message}</span>}
                </div>

                {/* 4. PAROLA TEKRARI (Confirm Password) */}
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Parola Tekrarı:</label>
                    <input type="password" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                        {...register("confirm_password", { 
                            required: "Parola tekrarı zorunludur", 
                            validate: (value) => value === passwordWatch || "Parolalar eşleşmiyor."
                        })} 
                    />
                    {errors.confirm_password && <span className="text-red-600 text-xs">{errors.confirm_password.message}</span>}
                </div>

                {/* 5. ROL SEÇİMİ */}
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Rol Seçimi:</label>
                    <select 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                        {...register("role_id", { required: "Rol seçmek zorunlu" })} 
                        defaultValue={2} // Varsayılanı role_id=2 (Mağaza) olarak ayarladım, böylece koşullu alanları kolay test edebilirsiniz.
                    >
                        {roles.map(role => (
                            <option key={role.id} value={role.id}>{role.name}</option>
                        ))}
                    </select>
                    {errors.role_id && <p className="text-red-600 text-xs">{errors.role_id.message}</p>}
                </div>

                {/* 6. MAĞAZA BİLGİLERİ (KOŞULLU - role_id 2 ise görünür) */}
                {selectedRoleId === "2" && (
                    <div className="p-4 border border-blue-200 rounded-md bg-blue-50 space-y-4">
                        <h3 className="font-semibold text-blue-800">Mağaza Bilgileri</h3>
                        
                        {/* Mağaza Adı */}
                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Mağaza Adı (Min 3 char):</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md"
                                {...register("store.name", { required: "Mağaza adı zorunludur", minLength: { value: 3, message: "En az 3 karakter girin" } })}
                                placeholder="Mağaza Adı"
                            />
                            {errors.store?.name && <p className="text-red-600 text-xs">{errors.store.name.message}</p>}
                        </div>

                        {/* Telefon */}
                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Telefon (TR):</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md"
                                {...register("store.phone", { 
                                    required: "Telefon zorunludur",
                                    pattern: {
                                        value: phoneRegex,
                                        message: "Geçerli Türkiye telefonu (05xxxxxxxxx) girin"
                                    }
                                })}
                                placeholder="05xxxxxxxxx"
                            />
                            {errors.store?.phone && <p className="text-red-600 text-xs">{errors.store.phone.message}</p>}
                        </div>

                        {/* Vergi No */}
                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">Vergi No (TXXXXVXXXXXX):</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md"
                                {...register("store.tax_no", { 
                                    required: "Vergi no zorunludur",
                                    pattern: {
                                        value: taxNoRegex,
                                        message: "Vergi numarası hatalı (TXXXXVXXXXXX formatı)"
                                    }
                                })}
                                placeholder="T1234V567890"
                            />
                            {errors.store?.tax_no && <p className="text-red-600 text-xs">{errors.store.tax_no.message}</p>}
                        </div>

                        {/* IBAN */}
                        <div className="space-y-1">
                            <label className="block text-xs font-medium text-gray-700">IBAN:</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md"
                                {...register("store.bank_account", { required: "IBAN zorunludur" })}
                                placeholder="TR..."
                            />
                            {errors.store?.bank_account && <p className="text-red-600 text-xs">Geçerli IBAN girin</p>}
                        </div>
                    </div>
                )}

                {/* GÖNDER BUTONU */}
                <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full py-2 px-4 rounded-md text-white font-semibold transition duration-150 
                    ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    {loading ? (
                        // Spinner
                        <svg className="animate-spin h-5 w-5 mr-3 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : "Kayıt Ol"}
                </button>
            </form>
        </div>
    )
}