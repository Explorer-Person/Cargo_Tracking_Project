import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { LogoutDataProps } from "../../interfaces/InterfaceDeliveryDatas";

export const deliveryLogout = createApi({
  reducerPath: "deliveryLogout",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URI}`,
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      logoutPage: builder.query<boolean, LogoutDataProps>({
        query: (logoutData: LogoutDataProps ) => ({
          url: `/logout`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "CSRF-Token": logoutData.csrf_token,
          },
        }),
      }),
    };
  },
});

export const { useLogoutPageQuery } = deliveryLogout;
