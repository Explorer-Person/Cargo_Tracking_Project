import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorUIProps } from "../../interfaces/InterfaceComponents";
import Styles from "/public/css/styles.module.css";

function ErrorDisplay({
  messageBody,
  messageTitle,
}: ErrorUIProps): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      return navigate("/");
    }, 3000);
  });
  return (
    <div>
      <div className={`${Styles.errorBox}`}>
        <div
          style={{ backgroundColor: "darkred", borderRadius:"10px" }}
          className="text-light"
        >
          <h1 className="text-center">{messageTitle}</h1>
        </div>
        <div>
          <h3 className="text-center py-5">{messageBody}</h3>
        </div>
      </div>
    </div>
  );
}

export default ErrorDisplay;
