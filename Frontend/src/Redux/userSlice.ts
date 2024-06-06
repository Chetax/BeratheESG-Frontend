import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    username: string;
    id: string;
}

const initialState: UserState = {
    username: "",
    id: "",
};

export const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ username: string; id: string }>) => {
            state.username = action.payload.username;
            state.id = action.payload.id;
        },
    },
});

export const { setUser } = userSlice.actions; 
export default userSlice.reducer;
