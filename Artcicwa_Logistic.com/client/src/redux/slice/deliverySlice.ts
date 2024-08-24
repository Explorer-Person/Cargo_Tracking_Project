import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deliveryState{
    value: string;
    isLoggingOut: boolean;
    logoutStatus: string;
    csrfToken: string | undefined;
}

const initialState: deliveryState = {
    value: "",  
    isLoggingOut: false,
    logoutStatus: "",
    csrfToken: "",
};

export const deliverySlice = createSlice({
    name: 'tracking_code',
    initialState,
    reducers: {
        sendTrackingNum(state, action: PayloadAction<string>){
            state.value = action.payload;
        },
        logoutRequestStarted(state){
            state.isLoggingOut = true;
        },
        logoutRequestSuccess(state){
            state.isLoggingOut = false;
        },
        logoutRequestfailed(state){
            state.isLoggingOut = false
        },
        takeCsrfToken(state, action: PayloadAction<string | undefined>){
            state.csrfToken = action.payload;
        }
    }
});

export const {sendTrackingNum, logoutRequestStarted,logoutRequestSuccess,logoutRequestfailed, takeCsrfToken} = deliverySlice.actions;
export default deliverySlice.reducer;