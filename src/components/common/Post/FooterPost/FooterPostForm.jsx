import React from "react";
import styles from "../Post.module.scss";
import { Field, reduxForm } from "redux-form";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const FooterPostForm = (props) => {
  let [value, setValue] = React.useState(undefined);

  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <IconButton className={styles.button_icon}>
        <SentimentSatisfiedOutlinedIcon className={styles.icon} />
      </IconButton>
      <Field name="comment" onChange={(e) => setValue(e.target.value)} className={styles.input} placeholder="Add a comment..." component="input" />
      <Button className={styles.button_post} type="submit" disabled={!value} variant="text">
        Post
      </Button>
    </form>
  );
};

const FooterPostReduxForm = reduxForm({ form: "comment" })(FooterPostForm);

export default FooterPostReduxForm;
