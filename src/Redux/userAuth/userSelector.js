export const selectedUserName = state => state.userAuth.user ? state.userAuth.user.name : null;
export const selectedUserEmail = state => state.userAuth.user ? state.userAuth.user.email : null;
export const selectedUserLogIn = state => state.userAuth.isLogIn;