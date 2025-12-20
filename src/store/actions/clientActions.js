import axios from "../../api/axiosInstance";

// 1. SET_USER gibi tipleri reducer'da kullanıyorsan onları da buraya ekleyebilirsin
export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles
});

// --- LOGIN USER ACTION ---
export const loginUser = (formData, navigate, from, rememberMe) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/login", formData);

      const userData = {
        name: response.data.name,
        email: response.data.email,
        role_id: response.data.role_id,
        token: response.data.token
      };

      // Redux store güncelle
      dispatch({
        type: "SET_USER",
        payload: userData
      });

      // Beni hatırla seçiliyse token'ı kaydet
      if (rememberMe) {
        localStorage.setItem("token", response.data.token);
      }

      // Axios header'ı güncelle (Bearer ÖNEKİ OLMADAN)
      axios.defaults.headers.common["Authorization"] = response.data.token;

      // Yönlendirme (v5 uyumlu)
      navigate.push(from || "/");
      
      return response.data; // Başarı durumunda veriyi dön
    } catch (error) {
      throw error;
    }
  };
};

// --- FETCH ROLES ACTION ---
export const fetchRoles = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;

    if (roles && roles.length > 0) {
      return;
    }

    try {
      const response = await axios.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Roller çekilemedi:", error);
    }
  };
};

// --- VERIFY TOKEN ACTION (OTOMATİK LOGİN) ---
export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      // Bearer öneki eklemeden token'ı koyuyoruz
      axios.defaults.headers.common["Authorization"] = token;

      const response = await axios.get("/verify");

      // Başarılıysa kullanıcıyı store'a yaz
      dispatch({
        type: "SET_USER",
        payload: response.data
      });

      // Token'ı yenile
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common["Authorization"] = response.data.token;
      }
    } catch (error) {
      console.error("Token geçersiz:", error);
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    }
  };
};