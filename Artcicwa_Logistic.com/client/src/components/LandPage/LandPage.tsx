/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import toastErrors from "../../errors/handleErrors/toastErrors";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { sendTrackingNum } from "../../redux/slice/deliverySlice";
import { useLogoutPageQuery } from "../../redux/slice/deliveryLogout";
import ErrorDisplay from "../../errors/errorsUI/ErrorDisplay";
import LandPageUI from "../componentsUI/LandPageUI";
import { onChangeVal } from "../../handles/handleInput";
import LoadingPage from "../../errors/errorsUI/LoadingPage";
import { LogoutDataProps } from "../../interfaces/InterfaceDeliveryDatas";

interface logoutResponse {
  [key: string]: unknown;
}

function LandPage() {
  const dispatch = useAppDispatch();
  const logoutStatus = useAppSelector((state) => state.delivery.isLoggingOut);
  const csrf_token = useAppSelector((state) => state.delivery.csrfToken);

  const logoutData: LogoutDataProps = {
    csrf_token: csrf_token
  };

  const { logoutLoading, logoutError }: logoutResponse =
    useLogoutPageQuery(logoutData);

  const [state, setState] = useState({
    message: "",
    route: "",
    errorMessage: "Please Fill Input...",
  });

  const reloadPage = () => {
    window.location.reload();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeVal(event, setState);
  };

  const sendTrackingCode = async () => {
    if (!state.message) {
      toastErrors(state.errorMessage);
    } else {
      dispatch(sendTrackingNum(state.message));
    }
  };

  if (logoutLoading) {
    return <LoadingPage />;
  }
  if (logoutError) {
    return (
      <ErrorDisplay
        messageBody="Something Went Wrong While Logout..."
        messageTitle="ERROR"
      />
    );
  }
  return (
    <LandPageUI
      onChangeVal={onChange}
      logoutStatus={logoutStatus}
      reloadPage={reloadPage}
      sendTrackingCode={sendTrackingCode}
      route={state.route}
    />
  );
}

export default LandPage;
