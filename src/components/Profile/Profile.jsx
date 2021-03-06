import React from "react";
import styles from "./Profile.module.scss";
import ProfileContent from "./ProfileContent/ProfileContent";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo accounts={props.accounts} addChat={props.addChat} getProfileData={props.getProfileData} id={props.id} account={props.account} chats={props.chats} setProfileChats={props.setProfileChats} following={props.following} unFollowing={props.unFollowing} />
      <ProfileContent accounts={props.accounts} account={props.account} setProfilePosts={props.setProfilePosts} id={props.id} getProfileData={props.getProfileData} />
    </div>
  );
};

export default Profile;
