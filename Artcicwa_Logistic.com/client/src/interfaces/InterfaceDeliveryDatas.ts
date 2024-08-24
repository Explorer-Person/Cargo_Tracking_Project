export interface FormattedOrderDetail {
  id: string;
  element: {
    emailAddress: string;
    orderId: string;
    productId: string;
    productTitle: string;
    count: string;
    branchId: string;
  };
}

export interface FormattedShipmentEvent {
  id: string;
  detailId: string;
  element: {
    trackingCode: string;
    carrierTrackingCode: string;
    eventDate: string;
    eventTime: string;
    location: string;
    eventDetails: string;
    branchId: string;
  };
}

export interface OtherFormattedShipmentDetail {
  id: string;
  element: {
    orderId: string;
    trackingCode: string;
    carrierTrackingCode: string;
    shipDate: string;
    deliveryEstimate: string;
    carrier: string;
    name: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    emailAddress: string;
    branchId: string;
    shipmentEvents: FormattedShipmentEvent[];
  };
}
export interface Order {
  rootId: string;
  orderId: string;
  amazonOrderId: string;
  orderDate: string;
  status: string;
  dateSubmitted: string;
  shippingService: string;
  salesChannel: string;
  packingSlipComments: string;
  amazonTrackingCode: string;
  trackingCode: string;
  emailAddress: string;
}

export interface ContentDetailData {
  order: Order;
  orderDetails: FormattedOrderDetail[];
  shipmentDetails: OtherFormattedShipmentDetail[];
}

export interface FormattedShipmentDetail {
  id: string;
  element: {
    orderId: string;
    trackingCode: string;
    carrierTrackingCode: string;
    shipDate: string;
    deliveryEstimate: string;
    carrier: string;
    name: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    emailAddress: string;
    branchId: string;
  };
}

export interface FormattedOrder {
  rootId: string;
  orderId: string;
  amazonOrderId: string;
  orderDate: string;
  status: string;
  dateSubmitted: string;
  shippingService: string;
  salesChannel: string;
  packingSlipComments: string;
  amazonTrackingCode: string;
  trackingCode: string;
  emailAddress: string;
  orderDetails: FormattedOrderDetail[];
  shipmentDetails: FormattedShipmentDetail[];
  shipmentEvents: FormattedShipmentEvent[];
}

export interface LoginDataProps {
  csrf_token : string | undefined;
  tracking_code : string;
}
export interface LogoutDataProps {
  csrf_token : string | undefined;
}