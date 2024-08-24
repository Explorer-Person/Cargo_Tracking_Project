
import {useEffect} from 'react';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Styles from "/public/css/styles.module.css";
import { logoutRequestSuccess } from '../../redux/slice/deliverySlice';
import { LandPageUIProps } from '../../interfaces/InterfaceComponents';


export default function LandPageUI({
  onChangeVal,
  route,
  sendTrackingCode,
  reloadPage,
  logoutStatus
}: LandPageUIProps): JSX.Element {
 useEffect(()=>{
  if(logoutStatus === true && window.location.pathname === "/"){
    reloadPage();
    logoutRequestSuccess();
  }
 },[logoutStatus, reloadPage])
  return (   
    <div className={Styles.background}>
      <div className={Styles.inputBox}>
        
        <ToastContainer />
        <img className={`w-75 h-15 mt-4 position-relative`} src="/logos/world.png" alt="" />
        
        <form className={Styles.form}>
          <label><h3 className='mt-3 text-light text-center'>Tracking Code</h3></label>
          <input
            onChange={onChangeVal}
            className={Styles.inputs}
            type="text"
          ></input>

          <Link  to={route}>
            <Button style={{marginBottom: "5%", marginTop: "5%"}} type='submit' onClick={sendTrackingCode} size="lg" color="light" outline>
              TRACK
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
