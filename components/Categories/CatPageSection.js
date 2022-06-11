import styles from "@/styles/Category.module.css";

const CatPageSection = ({ title, children }) => {
	return (
		<>
			<div className={styles.section}>
				<h2 className={styles.sectionTitle}>{title}</h2>
				{children}
			</div>
		</>
	);
};

export default CatPageSection;
