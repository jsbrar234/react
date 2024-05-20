import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        add(state, action) { },
        delete(state, action) { },
        allDelete(state, action) { }
    }
})
console.log('userSlice', userSlice?.name)


export default userSlice