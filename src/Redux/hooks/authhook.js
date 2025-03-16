
import {
  selectedUserEmail,
  selectedUserLogIn,
  selectedUserName,
} from "../userAuth/userSelector";
import { useSelector } from "react-redux";

export const useHookAuth = () => {
  const userName = useSelector(selectedUserName);
  const userEmail = useSelector(selectedUserEmail);
  const userIsLogIn = useSelector(selectedUserLogIn);
  console.log("State in component:", { userName, userEmail, userIsLogIn });
  return { userName, userEmail, userIsLogIn };
  
};
