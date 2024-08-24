import { ContentDetailData } from "./InterfaceDeliveryDatas";


export interface InfoPageUIProps {
  contentDetailData: ContentDetailData;
  handleLogout: () => void;
}

export interface LandPageUIProps {
  onChangeVal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  route: string;
  sendTrackingCode: () => void;
  reloadPage: () => void;
  logoutStatus: boolean;
}

export interface ErrorUIProps{
  messageBody: string;
  messageTitle: string;
}
