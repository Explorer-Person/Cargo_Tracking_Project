import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FormattedOrder, LoginDataProps } from "../../interfaces/InterfaceDeliveryDatas";

export const deliveryLogin = createApi({
  reducerPath: "deliveryLogin",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URI}`,
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      getCsrfToken: builder.query<string , void>({
        query: () => ({
          url: "/api/csrf-token", // Fetch CSRF token from this endpoint
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      }),
      getDelivery: builder.query<FormattedOrder, LoginDataProps>({
        query: (loginDatas: LoginDataProps) => ({
          url: "/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "CSRF-Token": loginDatas.csrf_token,
          },
          body: { tracking_code: loginDatas.tracking_code },
        }),
      }),
    };
  },
});

export const { useGetDeliveryQuery, useGetCsrfTokenQuery } = deliveryLogin;
