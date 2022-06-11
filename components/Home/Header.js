import { RiMenu3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Home.module.css";

const Header = () => {
	const [menuActive, setMenuActive] = useState(false);

	useEffect(() => {
		const handleClick = () => setMenuActive(false);
		window.addEventListener("click", handleClick);

		return () => window.removeEventListener("click", handleClick);
	}, []);

	return (
		<div className={styles.navbar}>
			<Link href="/" passHref>
				<div className={styles.logo}>
					<Image alt="logo" src="/logo.svg" width={110} height={25} />
				</div>
			</Link>
			<div className={styles.responsiveMenuBox}>
				<button
					className={styles.toggle}
					onClick={(e) => {
						e.stopPropagation();
						setMenuActive(!menuActive);
					}}
				>
					<RiMenu3Fill />
				</button>
				<ul
					className={`${styles.navbarMenu} ${
						menuActive && styles.active
					}`}
				>
					<li className={styles.menuItem}>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li className={styles.menuItem}>
						<Link href="/courses">
							<a>Courses</a>
						</Link>
					</li>
					<li className={styles.menuItem}>
						<Link href="/instructors">
							<a>Instructors</a>
						</Link>
					</li>
					<li className={styles.menuItem}>
						<Link href="/become-an-instructor">
							<a>Become an instructor</a>
						</Link>
					</li>
					<li className={styles.menuItem}>
						<Link href="/login">
							<a>Login</a>
						</Link>
					</li>
					<li className={`${styles.menuItem} ${styles.signupBtn}`}>
						<Link href="/signup">
							<a>Sign Up</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
