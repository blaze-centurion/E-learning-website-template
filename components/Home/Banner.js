import Image from "next/image";

import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Banner = () => {
	return (
		<div className={`${styles.banner} ${styles.flexSection}`}>
			<div className={styles.bannerContent}>
				<h1 className={styles.bannerTitle}>
					Learn on your schedule from any device
				</h1>
				<Link href="/signup" passHref>
					<button className={styles.bannerBtn}>Start Learning</button>
				</Link>
			</div>
			<div className={styles.bannerImg}>
				<Image
					src="/banner.svg"
					alt="banner"
					layout="fill"
					blurDataURL="/light-gray-blur-background-vector.jpg"
					placeholder="blur"
				/>
			</div>
		</div>
	);
};

export default Banner;
