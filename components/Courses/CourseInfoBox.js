import { Rating } from "react-simple-star-rating";
import Image from "next/image";

import styles from "@/styles/Course.module.css";
import { useRouter } from "next/router";

const CourseInfoBox = () => {
	const router = useRouter();

	return (
		<div className={styles.detailBox}>
			<div className={styles.dFlex}>
				<p className={styles.badge}>-39%</p>
				<p className={styles.catName}>Data Modeling</p>
			</div>
			<h1 className={styles.courseName}>{router.query.courseName}</h1>
			<div className={`${styles.dFlex} ${styles.responsiveDFlex}`}>
				<div className={styles.profileBox}>
					<Image
						alt="Owen Christ"
						src="/instructors/instructor.webp"
						width="42"
						height="42"
					/>
					<h3 className={styles.teacherName}>Owen Christ</h3>
				</div>
				<p className={styles.lastUpdated}>
					Last Update December 1, 2020
				</p>
			</div>
			<div className={`${styles.dFlex} ${styles.responsiveDFlex}`}>
				<div className={styles.ratingBox}>
					<p className={styles.ratingText}>
						<span className={styles.rating}>4.36</span>/ 5
					</p>
					<Rating
						className={styles.stars}
						ratingValue={90}
						size={19}
					/>
				</div>
				<p className={styles.enrolledStudent}>
					<Image
						alt="students"
						src="/account (1).png"
						width="20"
						height="20"
					/>
					<span>10 students already enrolled</span>
				</p>
			</div>
		</div>
	);
};

export default CourseInfoBox;
