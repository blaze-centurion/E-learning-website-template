import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Home.module.css";

const TopCatItem = ({ image, title }) => {
	return (
		<>
			<Link href={`/categories/${title}`}>
				<div className={styles.catItem}>
					<div className={styles.catItemImgBox}>
						<Image alt={title} src={image} width={80} height={80} />
					</div>
					<h3 className={styles.catItemName}>{title}</h3>
				</div>
			</Link>
		</>
	);
};

export default TopCatItem;
