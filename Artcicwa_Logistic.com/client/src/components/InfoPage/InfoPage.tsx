/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useGetDeliveryQuery,
} from "../../redux/slice/deliveryLogin";
import { useAppSelector } from "../../redux/store/hooks";
import ErrorDisplay from "../../errors/errorsUI/ErrorDisplay";
import InfoPageUI from "../componentsUI/InfoPageUI";
import { useAppDispatch } from "../../redux/store/hooks";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../handles/handleLogout";
import {
  ContentDetailData,
  LoginDataProps,
  Order,
} from "../../interfaces/InterfaceDeliveryDatas";
import LoadingPage from "../../errors/errorsUI/LoadingPage";

function InfoPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const csrf_token = useAppSelector((state) => state.delivery.csrfToken);
  const tracking_code = useAppSelector((state) => state.delivery.value);

  const loginDatas: LoginDataProps = {
    tracking_code: tracking_code,
    csrf_token: csrf_token,
  };
  const { data: orderData, isFetching, isError } = useGetDeliveryQuery(loginDatas);

  const sendLogoutReq = async () => {
    return handleLogout(dispatch, navigate);
  };
  window.addEventListener("popstate", () => {
    return handleLogout(dispatch, navigate);
  });
  const extractOrderData = () => {
    const { orderDetails, shipmentDetails, shipmentEvents, ...justOrder } =
      orderData || {};
    return justOrder as Order;
  };

  const updatedShipmentDetails = (orderData?.shipmentDetails ?? []).filter(
    (value, index, self) => {
      return index === self.findIndex((t) => t.id === value.id);
    }
  );

  const updatedOrderDetails = (orderData?.orderDetails ?? []).filter(
    (value, index, self) => {
      return index === self.findIndex((t) => t.id === value.id);
    }
  );

  const updatedShipmentEvents = (orderData?.shipmentEvents ?? []).filter(
    (value, index, self) => {
      return index === self.findIndex((t) => t.id === value.id);
    }
  );

  const configuredShipmentDetails = updatedShipmentDetails.map((detail) => {
    const terminatedShipmentEvents = updatedShipmentEvents.filter(
      (event) => event.detailId === detail.id
    );
    return {
      ...detail,
      element: {
        ...detail.element,
        shipmentEvents: terminatedShipmentEvents,
      },
    };
  });

  const contentDetailData: ContentDetailData = {
    order: extractOrderData(),
    orderDetails: updatedOrderDetails,
    shipmentDetails: configuredShipmentDetails,
  };

   
    if (isFetching) {
      return <LoadingPage/>;
    }
    if(isError){
      return (
        <ErrorDisplay
          messageTitle="Error!"
          messageBody="Delivery not found, your tracking code maybe incorrect, please confirm your tracking code"
        />
      );
    } 
    else {
      if (!orderData) {
        
        return (
          <ErrorDisplay
            messageTitle="Error!"
            messageBody="Delivery not found, your tracking code maybe incorrect, please confirm your tracking code"
          />
        );
      }
      return (
        <InfoPageUI
          handleLogout={sendLogoutReq}
          contentDetailData={contentDetailData}
        />
      );
    }
  }


export default InfoPage;
