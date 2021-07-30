/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import styles from "./SignUp.module.css";
import { reduxForm } from "redux-form";
import { wrapperCreateField, Input, wrapperButton } from "../../common/FormControls/FormControls";
import {
	validatePhoneNumberAndEmail,
	validatePassword,
	required,
	validateFirstAndLastNameCreator,
	validateFindTheSameUserCreator,
} from "../../../utils/FieldValidationForm/FieldValidationForm";

let validateFirstName = validateFirstAndLastNameCreator("first");
let validateLastName = validateFirstAndLastNameCreator("last");
let validateFindTheSameUser = validateFindTheSameUserCreator(JSON.parse(localStorage.getItem("users")));

const SignUpForm = props => {
	return (
		<form className={styles.form} onSubmit={props.handleSubmit}>
			{wrapperCreateField("name", "text", [validateFirstName, required], Input, "Your name")}
			{wrapperCreateField("surname", "text", [validateLastName, required], Input, "Your surname")}
			{wrapperCreateField(
				"phone_or_email",
				"text",
				[validatePhoneNumberAndEmail, required, validateFindTheSameUser],
				Input,
				"Mobile Number or email"
			)}
			{wrapperCreateField("password", "password", [validatePassword, required], Input, "Password")}
			{wrapperButton("SIGN UP", { ...props })}
		</form>
	);
};

const SignUpReduxForm = reduxForm({ form: "sign_in" })(SignUpForm);

export default SignUpReduxForm;
