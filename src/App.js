import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import HeaderContainer from "./components/Header/HeaderContainer";
import MainContainer from "./components/Main/MainContainer";
import NotFound from "./components/common/NotFound/NotFound";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SignInContainer from "./components/Authorization/SignIn/SignInContainer";
import SignUpContainer from "./components/Authorization/SignUp/SignUpContainer";
import CurrentPostContainer from "./components/common/CurrentPost/CurrentPostContainer";
import NavbarRow from "./components/Header/Navbar/NavbarRow/NavbarRow";
import { useLocation } from "react-router-dom";
import { withSuspense } from "./hoc/withSuspense/withSuspense";
import { chatConstant, editConstant, friendsConstant, mainConstant, photoConstant, profileConstant, signInConstant, signUpConstant } from "./core/constants/constants";

// lazy loading
const ChatContainer = React.lazy(() => import("./components/Chat/ChatContainer"));
const FriendsContainer = React.lazy(() => import("./components/Friends/FriendsContainer"));
const EditContainer = React.lazy(() => import("./components/common/Edit/EditContainer"));

function App(props) {
  let location = useLocation();

  let checkSignIn = location.pathname.includes(signInConstant.path);
  let checkSignUp = location.pathname.includes(signUpConstant.path);

  // console.log(props.id);

  return (
    <div className="App">
      {props.auth ? (
        <div className="container_fluid container_fluid__position">
          <HeaderContainer />
        </div>
      ) : undefined}

      <div className={props.auth ? `container` : "container__auth"}>
        <Switch>
          <Route exact path={`${mainConstant.path}`} render={() => <MainContainer />} />
          <Route exact path={`${photoConstant.path}/:id`} render={() => <CurrentPostContainer />} />
          <Route path={`${profileConstant.path}/:id?`} render={() => <ProfileContainer />} />
          <Route path={`${chatConstant.path}/:id?`} render={withSuspense(ChatContainer)} />
          <Route path={`${friendsConstant.path}`} render={withSuspense(FriendsContainer)} />
          <Route path={`${editConstant.path}`} render={withSuspense(EditContainer)} />
          <Route path={`${signInConstant.path}`} render={() => <SignInContainer />} />
          <Route path={`${signUpConstant.path}`} render={() => <SignUpContainer />} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </div>

      {!(checkSignIn || checkSignUp) ? (
        <div className="container_fluid container_fluid__paper">
          <NavbarRow {...props} isBottomNavigation={true} />
        </div>
      ) : undefined}
    </div>
  );
}

export default App;
