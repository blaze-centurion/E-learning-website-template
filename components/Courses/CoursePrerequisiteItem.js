import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Course.module.css";

const CoursePrerequisiteItem = ({ image, title }) => {
	return (
		<div className={styles.prerequisite}>
			<div className={styles.prerequisiteImgBox}>
				<Image alt={title} src={image} width="70" height="46" />
			</div>
			<Link href="#">
				<a className={styles.prerequisiteName}>{title}</a>
			</Link>
		</div>
	);
};

export default CoursePrerequisiteItem;
