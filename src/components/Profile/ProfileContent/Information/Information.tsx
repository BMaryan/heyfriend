import React from "react";
import { profileConstant } from "../../../../core/constants/constants";
import { AccountType, FirebaseType } from "../../../../types/types";
import styles from "./Information.module.scss";
import { NavLink } from "react-router-dom";
import Contacts from "./Contacts/Contacts";
import { Route } from "react-router-dom";
import Review from "./Review/Review";
import About from "./About/About";
import Media from "react-media";

interface InformationPropsType {
  currentAccount: FirebaseType<AccountType> | undefined;
  id: string;
}

const Information = (props: InformationPropsType) => {
  return (
    <div>
      <div className={styles.information_container}>
        <div className={styles.menu}>
          <div className={styles.title}>Information</div>

          <div className={styles.navigation}>
            <NavLink exact to={`${profileConstant.path}/${props.id}/information`} className={styles.item} activeClassName={styles.item_active}>
              Review
            </NavLink>
            <NavLink exact to={`${profileConstant.path}/${props.id}/information/about`} className={styles.item} activeClassName={styles.item_active}>
              <Media query={{ maxWidth: 600 }}>{(matches) => (!matches ? <>Details about me</> : <>Details</>)}</Media>
            </NavLink>
            <NavLink exact to={`${profileConstant.path}/${props.id}/information/contacts`} className={styles.item} activeClassName={styles.item_active}>
              <Media query={{ maxWidth: 600 }}>{(matches) => (!matches ? <>Contacts and basic information</> : <>Contacts</>)}</Media>
            </NavLink>
          </div>
        </div>

        <div className={styles.content}>
          <Route exact path={`${profileConstant.path}/${props.id}/information`} render={() => <Review currentAccount={props.currentAccount} />} />
          <Route exact path={`${profileConstant.path}/${props.id}/information/about`} render={() => <About currentAccount={props.currentAccount} />} />
          <Route exact path={`${profileConstant.path}/${props.id}/information/contacts`} render={() => <Contacts currentAccount={props.currentAccount} />} />
        </div>
      </div>
    </div>
  );
};

export default Information;
