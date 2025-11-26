const initialState = {
  products: [],   // ürünleri tutacak
  users: [],      // kullanıcıları tutacak
  currentUser: null, // giriş yapan kullanıcı
  cart: []        // sepetteki ürünler
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };

    
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };

   
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };

  
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    default:
      return state;
  }
}
