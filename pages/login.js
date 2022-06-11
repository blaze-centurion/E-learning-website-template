import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Login.module.css";

const Login = () => {
	return (
		<>
			<div className={styles.container}>
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
						Sign in to your account here.
					</p>
					<div className={styles.form}>
						<div className={styles.formgroup}>
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
						<div className={styles.formgroup}>
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
							value="Sign In"
							className={styles.submitBtn}
						/>
						<p className={styles.signUp}>
							New to LearnEngine?
							<Link href="/signup">
								<a className={styles.highlight}> Sign Up</a>
							</Link>
						</p>
					</div>
					<p className={styles.forget}>
						Forget your
						<Link href="/">
							<a className={styles.highlight}> Password?</a>
						</Link>
					</p>
				</div>
				<div className={styles.imageBox}></div>
			</div>
		</>
	);
};

export default Login;
