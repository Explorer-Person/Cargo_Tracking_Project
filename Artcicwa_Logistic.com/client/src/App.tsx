import LandPage from "./components/LandPage/LandPage";
import InfoPage from "./components/InfoPage/InfoPage";
import { Routes, Route } from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";
import FallBack from "./errors/errorsUI/FallBack";
import ErrorDisplay from "./errors/errorsUI/ErrorDisplay";
import { useGetCsrfTokenQuery } from "./redux/slice/deliveryLogin";
import {useEffect} from "react";
import { useAppDispatch } from "./redux/store/hooks";
import { takeCsrfToken } from "./redux/slice/deliverySlice";
import LoadingPage from "./errors/errorsUI/LoadingPage";
import NavbarUI from "./components/componentsUI/NavbarUI";
import FooterUI from "./components/componentsUI/FooterUI";


function App() {
  const dispatch = useAppDispatch();
  const { data: csrf_token, isLoading: csrfLoading, isError: csrfError } = useGetCsrfTokenQuery();

  useEffect(()=>{
    dispatch(takeCsrfToken(csrf_token))
  })
  if (csrfLoading) {
    return <LoadingPage />;
  } 
  if (csrfError) {
    return (
      <ErrorDisplay
        messageTitle="Forbidden auth"
        messageBody="Your Connection Can Not Validated..."
      />
    );
  }
  return (
    <div>
      <ErrorBoundary
      FallbackComponent={FallBack}
      >
        <NavbarUI/>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/infoPage" element={<InfoPage />} />
          <Route path="*" element={<ErrorDisplay messageBody="Not Found" messageTitle="404" />} />
        </Routes>
        <FooterUI/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
