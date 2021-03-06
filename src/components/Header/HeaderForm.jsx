import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HeaderForm = (props) => {
  let [toggleField, steToggleField] = React.useState(false);

  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div className={styles.wrapper_field}>
        <Field className={toggleField ? styles.showField : styles.hiddenField} name="search" type="search" placeholder="Search" component="input" />
        <FontAwesomeIcon onClick={() => (toggleField ? steToggleField(false) : steToggleField(true))} className={styles.search_icon} icon={faSearch} />
      </div>
    </form>
  );
};

const HeaderReduxForm = reduxForm({ form: "header_form" })(HeaderForm);

export default HeaderReduxForm;
