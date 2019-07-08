const minEmailLength = 6;
const minPasswordLength = 5;
const userEmail = prompt(`Please enter your email`);
if (userEmail) {
	if (userEmail.length >= minEmailLength) {
		if (userEmail === `user@gmail.com` || userEmail === `admin@gmail.com`) {
			let userPassword = prompt('Please enter your password');
			if (userPassword) {
				if (userEmail === `user@gmail.com` && userPassword === `UserPass` ||
				userEmail === `admin@gmail.com` && userPassword === `AdminPass`) {
					const changePassword = confirm(`Do you want to change your password?`);
					if (changePassword) {
						const oldPassword = prompt(`Please enter your old password`);
						if (userPassword === oldPassword) {
							const newPassword = prompt(`Please enter a new password`);
							if (newPassword.length >= minPasswordLength) {
								const repeatNewPassword = prompt(`Please repeat a new password`);
								if (newPassword === repeatNewPassword) {
									userPassword = newPassword;
									alert(`You have successfully changed your password.`);
								} else {
									alert(`You wrote the wrong password.`);
								}
							} else {
								alert(`It’s too short password. Sorry.`);
							}
						} else {
							alert(`Wrong password`);
						}
					} else {
						alert(`You have failed the change.`);
					}
				} else {
					alert(`Wrong password`);
				}
			} else {
				alert(`Canceled.`);
			}
		} else {
			alert(`I don’t know you`);
		}
	} else {
		alert(`I don't know any emails having name length less than 6 symbols`);
	}
} else {
	alert(`Canceled.`);
}

