import React from "react";
import styles from "./Contacts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contacts = props => {
	let valuePhoneOrEmail =
		props.account && !props.id ? props.account.profile.phone_or_email : props.otherProfile ? props.otherProfile.profile.profile : undefined;

	return (
		<div className={styles.contacts}>
			{props.account && props.account.profile && props.account.profile.phone_or_email ? (
				props.account.profile.phone_or_email.includes("@") ? (
					<div className={styles.wrapper_item}>
						<div className={styles.title}>Email</div>
						<div className={styles.wrapper_content}>
							<div>
								<FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
							</div>
							<div className={styles.value}>{valuePhoneOrEmail}</div>
						</div>
					</div>
				) : (
					<div className={styles.wrapper_item}>
						<div className={styles.title}>Phone number</div>
						<div className={styles.wrapper_content}>
							<div>
								<FontAwesomeIcon className={styles.icon} icon={faPhoneAlt} />
							</div>
							<div className={styles.value}>{valuePhoneOrEmail}</div>
						</div>
					</div>
				)
			) : undefined}
		</div>
	);
};

export default Contacts;