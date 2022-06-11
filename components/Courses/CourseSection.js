import styles from "@/styles/Course.module.css";

const CourseSection = ({ title, children }) => {
	return (
		<div className={styles.section}>
			<h2 className={styles.sectionTitle}>{title}</h2>
			{children}
		</div>
	);
};

export default CourseSection;
