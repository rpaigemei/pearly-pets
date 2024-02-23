/* Credit to https://github.com/jismonthomas/petfinder-react */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userToken: null,
    userTokenExpiry: '',
    loginTokenExpiry: '',
    userEmail: '',
    userID: '',
    userIsLoggedIn: false,
    userFavorites: []
}

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        setUserToken(state, action) {
            state.userToken = action.payload.token;
            state.userTokenExpiry = action.payload.tokenExpiry;
        },
        setLoginToken(state, action) {
            state.userEmail = action.payload.email;
            state.userID = action.payload.userID;
            state.loginTokenExpiry = action.payload.tokenExpiry;
            const currentLoginState = state.userIsLoggedIn;
            state.userIsLoggedIn = !currentLoginState;
        },
        logout(state) {
            state.userEmail = '';
            state.loginTokenExpiry = '';
            state.userID = '';
            state.userIsLoggedIn = false;
            state.userFavorites = [];
        },
        setUserFavorites(state, action) {
            const currentFav = state.userFavorites;
            const newItems = action.payload;
            state.userFavorites = [...currentFav, ...newItems];
        },
        deleteUserFavorite(state, action) {
            const fbID = action.payload;
            console.log('pet ID to delete: ', fbID);
            const newFavorites = state.userFavorites.filter(favItem => {
                return favItem.fbID !== fbID;
            });
            state.userFavorites = newFavorites;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;

