import Image from "next/image";

import styles from "@/styles/Home.module.css";

const AboutSection = () => {
	return (
		<div className={`${styles.flexSection} ${styles.aboutSection}`}>
			<div className={styles.aboutImg}>
				<Image
					alt="about us"
					src="/aboutUs.svg"
					width="695"
					height="455"
				/>
			</div>
			<div className={styles.aboutContentBox}>
				<h3 className={styles.secTitle}>About Us</h3>
				<h2 className={styles.aboutTitles}>
					Welcome to online Class LearnEngine
				</h2>
				<p className={styles.aboutContent}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cursus arcu vitae enim mi sit.Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Cursus arcu vitae enim mi sit.
				</p>
				<button className={styles.bannerBtn}>Learn more...</button>
			</div>
		</div>
	);
};

export default AboutSection;
