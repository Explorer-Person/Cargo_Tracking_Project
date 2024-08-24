import { NavigateFunction } from "react-router-dom";
import { logoutRequestStarted } from "../redux/slice/deliverySlice";
import { AppDispatch } from "../redux/store/store";

export const handleLogout = (dispatch: AppDispatch, navigate: NavigateFunction) =>{
    dispatch(logoutRequestStarted());
    return navigate("/");
}