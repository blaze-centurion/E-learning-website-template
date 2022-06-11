import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Course.module.css";

const CourseTagComp = ({ tags }) => {
	return (
		<div className={styles.tags}>
			<div className={styles.tagImgBox}>
				<Image alt="tag" src="/tag.png" width="20" height="20" />
			</div>
			<ul>
				{tags.map((tag, i) => {
					return (
						<li key={i}>
							<Link href="#">
								<a>{tag},</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CourseTagComp;
