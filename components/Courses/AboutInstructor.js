import { Rating } from "react-simple-star-rating";
import Image from "next/image";

import styles from "@/styles/Course.module.css";

const AboutInstructor = () => {
	return (
		<div className={styles.instructorBox}>
			<div className={styles.imgBox}>
				<Image
					src="/instructors/instructor.webp"
					alt="Owen Christ"
					width="200"
					height="245"
				/>
			</div>
			<div className={styles.content}>
				<h2 className={styles.name}>Owen Christ</h2>
				<div
					className={styles.ratingBox}
					style={{
						border: "none",
						margin: 0,
						padding: 0,
						marginLeft: -7,
					}}
				>
					<Rating
						className={styles.stars}
						ratingValue={90}
						size={19}
					/>
					<p
						className={styles.ratingText}
						style={{
							padding: 0,
							paddingLeft: 5,
						}}
					>
						4.36 / 5
					</p>
				</div>
				<ul className={styles.details}>
					<li>
						<Image
							alt="courses"
							src="/play-button.png"
							width="15"
							height="15"
						/>
						<span>42 Courses</span>
					</li>
					<li>
						<Image
							alt="reviews"
							src="/message.png"
							width="15"
							height="15"
						/>
						<span>4 Reviews</span>
					</li>
					<li>
						<Image
							alt="students"
							src="/account (1).png"
							width="18"
							height="18"
						/>
						<span>73 Students</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AboutInstructor;
