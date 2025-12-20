// productActions.js

import axios from "../../api/axiosInstance";

export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const setProductList = (list) => ({
  type: "SET_PRODUCT_LIST",
  payload: list,
});

export const setTotal = (total) => ({
  type: "SET_TOTAL",
  payload: total,
});

export const setFetchState = (state) => ({
  type: "SET_FETCH_STATE",
  payload: state,
});

export const setLimit = (limit) => ({
  type: "SET_LIMIT",
  payload: limit,
});

export const setOffset = (offset) => ({
  type: "SET_OFFSET",
  payload: offset,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    // 1. Durumu kontrol et: Eğer zaten yüklendiyse (veya yükleniyorsa) dur.
    const { categories } = getState().product;
    if (categories && categories.length > 0) {
      return; // Zaten verimiz var, API'yi yormayalım.
    }

    // 2. Yükleme durumunu başlat (isteğe bağlı)
    dispatch(setFetchState("FETCHING"));

    try {
      // 3. API isteği at
      const response = await axios.get("/categories");
      
      // 4. Gelen veriyi Redux store'una gönder
      dispatch(setCategories(response.data));
      
      // 5. Durumu başarıya çek
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Kategoriler çekilirken hata oluştu:", error);
      dispatch(setFetchState("ERROR"));
    }
  };
};