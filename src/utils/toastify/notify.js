import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (content, click = null, method = null) => {
  if (!click) {
    return toast(`${content}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    return toast(`${content}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClick: method,
    });
  }
};

export default notify;
