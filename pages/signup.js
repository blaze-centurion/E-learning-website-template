import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Login.module.css";

const SignUp = () => {
	return (
		<>
			<div className={styles.container}>
				<div
					className={`${styles.imageBox} ${styles.mixedGradient}`}
				></div>
				<div className={styles.contentBox}>
					<Link href="/">
						<div className={styles.logo}>
							<Image
								style={{ cursor: "pointer" }}
								src="/logo.svg"
								alt="logo"
								width="150"
								height="40"
							/>
						</div>
					</Link>
					<h2 className={styles.title}>Welcome to LearnEngine</h2>
					<p className={styles.subtitle}>
						Sign up create new account here.
					</p>
					<div className={styles.form}>
						<div
							className={`${styles.formgroup} ${styles.tertiaryColor}`}
						>
							<div className={styles.icon}>
								<Image
									src="/account.png"
									alt="name"
									width="16"
									height="16"
								/>
							</div>
							<input type="name" placeholder="Enter your name" />
						</div>
						<div
							className={`${styles.formgroup} ${styles.tertiaryColor}`}
						>
							<div className={styles.icon}>
								<Image
									src="/email.png"
									alt="email"
									width="16"
									height="16"
								/>
							</div>
							<input
								type="email"
								placeholder="Enter your email address"
							/>
						</div>
						<div
							className={`${styles.formgroup} ${styles.tertiaryColor}`}
						>
							<div className={styles.icon}>
								<Image
									src="/telephone-call.png"
									alt="mobile number"
									width="16"
									height="16"
								/>
							</div>
							<input
								type="tel"
								placeholder="Enter your mobile number"
							/>
						</div>
						<div
							className={`${styles.formgroup} ${styles.tertiaryColor}`}
						>
							<div className={styles.icon}>
								<Image
									src="/padlock.png"
									alt="password"
									width="16"
									height="16"
								/>
							</div>
							<input
								type="password"
								placeholder="Enter your password"
							/>
						</div>
						<input
							type="submit"
							value="Sign Up"
							className={`${styles.submitBtn} ${styles.tertiarySubmitBtn}`}
						/>
						<p className={styles.signUp}>
							Already joined LearnEngine?
							<Link href="/login">
								<a className={`${styles.tertiaryColor}`}>
									{" "}
									Sign In
								</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
