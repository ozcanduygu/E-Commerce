import axios from "../../api/axiosInstance";

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

      // Redux store
      dispatch({
        type: "SET_USER",
        payload: userData
      });

      // Remember me
      if (rememberMe) {
        localStorage.setItem("token", response.data.token);
      }

      // Redirect
      navigate(from || "/");
    } catch (error) {
      throw error;
    }
  };
};
