import { toast, ToastOptions } from "react-toastify";

export default function toastErrors(errorMessage: string) {

  const toastOptions: ToastOptions = {
    type: "error",
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

   return toast(errorMessage, toastOptions);
 
}
