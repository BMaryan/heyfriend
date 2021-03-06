import React from "react";
import styles from "./Post.module.scss";
import HeadPost from "./HeadPost/HeadPost";
import BodyPost from "./BodyPost/BodyPost";
import FooterPost from "./FooterPost/FooterPost";
import { defaultPostConstant, modalPostConstant, onlyBodyPostConstant } from "../../../core/constants/constantsPost";

const Post = (props) => {
  let checkClickFavoriteBorder = props.account.profile.likedPosts && props.account.profile.likedPosts.length > 0 ? props.account.profile.likedPosts.find((like) => like.id === props.post.id) : undefined;

  return (
    <div className={styles.wrapper_post}>
      <div className={styles.post}>
        {props.kindOfPost === defaultPostConstant ? (
          <>
            <HeadPost {...props} />
            <BodyPost {...props} checkClickFavoriteBorder={checkClickFavoriteBorder} />
            <FooterPost {...props} checkClickFavoriteBorder={checkClickFavoriteBorder} />
          </>
        ) : props.kindOfPost === modalPostConstant ? (
          <div className={styles.toggle_show_post_content}>
            <div className={styles.postPhoto}>
              <BodyPost {...props} checkClickFavoriteBorder={checkClickFavoriteBorder} />
            </div>

            <div className={styles.content}>
              <HeadPost {...props} />
              <FooterPost {...props} checkClickFavoriteBorder={checkClickFavoriteBorder} />
            </div>
          </div>
        ) : props.kindOfPost === onlyBodyPostConstant ? (
          <>
            <BodyPost {...props} checkClickFavoriteBorder={checkClickFavoriteBorder} />
          </>
        ) : undefined}
      </div>
    </div>
  );
};

export default Post;
