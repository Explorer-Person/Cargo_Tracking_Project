import DOMPurify from "dompurify";

interface State {
  route: string;
  message: string;
  errorMessage: string;
}

const validateTrackingCode = (value: string) => {
    const regex =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
    return regex.test(value);
  };

export const onChangeVal = async (event: React.ChangeEvent<HTMLInputElement>, setState: (newState: State) => void) => {
    const value = await event.target.value;
    const isCorrect = await validateTrackingCode(value);
    if (value === "") {
      setState({ route: "/", message: "", errorMessage: "Please Fill Input Value..." });
    } else if (!isCorrect) {
      setState({
        route: "/",
        message: "",
        errorMessage: "Please enter a valid tracking code...",
      });
    } else {
      setState({
        route: "infoPage",
        message: DOMPurify.sanitize(value.trim()),
        errorMessage: "",
      });
    }
  };