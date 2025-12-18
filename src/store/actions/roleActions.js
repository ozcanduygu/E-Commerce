// roleActions.js
import axios from "../../api/axiosInstance.js"; // senin yolun doğru mu kontrol et
import { setRoles } from "./clientActions";

// Thunk action creator
export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { client } = getState(); // redux state
    // client.roles var mı, boş mu?
    if (client.roles && client.roles.length > 0) {
      // zaten var; tekrar fetch etmeye gerek yok
      return;
    }

    try {
      // isteğe göre fetchState action'ı da kullanılabilir
      dispatch({ type: "SET_FETCH_STATE", payload: "FETCHING" }); // isteğe bağlı, product için de kullanılır
      const response = await axios.get("/roles");
      const rolesData = response.data;

      dispatch(setRoles(rolesData));
      // isteğe bağlı: fetchState'i "FETCHED" vs ile güncelle
      dispatch({ type: "SET_FETCH_STATE", payload: "FETCHED" });
    } catch (error) {
      console.error("Roles fetch error:", error);
      // isteğe bağlı: fetchState'i "FAILED" ile güncelle
      dispatch({ type: "SET_FETCH_STATE", payload: "FAILED" });
    }
  };
};
