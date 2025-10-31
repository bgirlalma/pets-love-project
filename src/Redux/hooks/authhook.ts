import {
  selectedUserLogIn,
  selectedUser,
  selectedUserToken,
} from "../userAuth/userSelector";
import { useSelector } from "react-redux";

export const useHookAuth = () => {
  const userToken = useSelector(selectedUserToken);
  const user = useSelector(selectedUser);
  const userIsLogIn = useSelector(selectedUserLogIn);

 return { userToken, user, userIsLogIn };
};
