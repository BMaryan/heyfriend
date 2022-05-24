import React from "react";
import styles from "./Posts.module.scss";
import { ReturnImageList, ToggleShowCurrentPostContainer } from "../../../../utils/helperForProfile/helperForProfile";
import { useHistory, useParams } from "react-router-dom";

const Posts = (props) => {
  let history = useHistory();
  let params = useParams();

  // let currentAccount = props?.posts.map((post) => (post?.data() && props.params.id ? post?.data().accountId === props.params.id : undefined));
  // let currentPost = currentAccount?.data()?.posts ? currentAccount?.data()?.posts.find((post) => (post?.data() && props.params.id ? post?.data()?.accountId === props.params.id : undefined)) : undefined;
  // let otherProfile = props.posts.find((post) => (post?.data() && props.id ? post?.data().accountId === props.id : undefined));

  // console.log(currentAccount);

  return (
    <div className={styles.posts}>
      <div className={styles.wrapper_posts}>
        {props?.id === props?.account?.id ? (
          <div className={styles.wrapper_input}>
            <input className={styles.input} onClick={() => props.handleOpen()} type="text" value="" onChange={() => undefined} placeholder="What's on your mind?" />
          </div>
        ) : undefined}

        {!props.id ? <ReturnImageList accounts={props.accounts} account={props.account} openModalCurrentPost={props.openModalCurrentPost} setOpenModalCurrentPost={props.setOpenModalCurrentPost} oftenCheckOtherProfile={props.oftenCheckOtherProfile} id={props.id} posts={props.posts} logicOfPagePost={true} isMyProfile={true} /> : <ReturnImageList accounts={props.accounts} account={props.account} openModalCurrentPost={props.openModalCurrentPost} setOpenModalCurrentPost={props.setOpenModalCurrentPost} oftenCheckOtherProfile={props.oftenCheckOtherProfile} id={props.id} logicOfPagePost={true} posts={props.posts} isOtherProfile={true} />}

        {props.openModalCurrentPost ? <ToggleShowCurrentPostContainer {...props} openModalCurrentPost={props.openModalCurrentPost} setOpenModalCurrentPost={props.setOpenModalCurrentPost} id={props.id} history={history} params={params} currentAccount={undefined} /> : undefined}
      </div>
    </div>
  );
};

export default Posts;
