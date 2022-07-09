import React from "react";
import { authErrorSelector, authLoadingSelector } from "../../../redux/auth-selectors";
import { getAccountSelector } from "../../../redux/account-selectors";
import { authActions, signIn } from "../../../redux/auth-reducer";
import { onAuthStateChanged } from "firebase/auth";
import { AccountType } from "../../../types/types";
import { StateType } from "../../../redux/store";
import { useHistory } from "react-router-dom";
import { auth } from "../../../firebase";
import { connect } from "react-redux";
import SignIn from "./SignIn";

type OwnPropsType = {};

type MapStateToPropsType = {
  account: AccountType | null;
  authError: string | null;
  loading: boolean;
};

type MapDispatchToPropsType = {
  signIn: any;
  authSuccess: () => void;
};

export type SignInContainerPropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType;

const SignInContainer = (props: SignInContainerPropsType) => {
  const history = useHistory();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push(`/`);
      }
    });
  });

  return <SignIn {...props} />;
};

const mapStateToProps = (state: StateType): MapStateToPropsType => ({ account: getAccountSelector(state), authError: authErrorSelector(state), loading: authLoadingSelector(state) });

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, StateType>(mapStateToProps, { signIn, authSuccess: authActions.authSuccess })(SignInContainer);