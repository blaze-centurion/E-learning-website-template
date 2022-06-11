import { Rating } from "react-simple-star-rating";
import Image from "next/image";

import styles from "@/styles/Category.module.css";

const InstructorItem = ({
	image,
	name,
	designation,
	ratings,
	noOfCourses,
	noOfStudentsEnrolled,
	contentBoxStyle,
	dFlexBoxStyle,
	imageDim = { width: 60, height: 60 },
}) => {
	return (
		<div className={styles.instructorBox}>
			<div className={styles.dFlex} style={dFlexBoxStyle}>
				<div className={styles.imgBox}>
					<Image
						src={image}
						alt={name}
						width={imageDim.width}
						height={imageDim.height}
						blurDataURL="/light-gray-blur-background-vector.jpg"
						placeholder="blur"
					/>
				</div>
				<div className={styles.contentBox} style={contentBoxStyle}>
					<h3 className={styles.name}>{name}</h3>
					<p className={styles.designation}>{designation}</p>
					<div className={styles.ratingBox}>
						<Rating ratingValue={90} size={17} />
						<p>
							<span>{ratings}</span>/5
						</p>
					</div>
				</div>
			</div>
			<div className={styles.courseDetails}>
				<p>
					<Image
						src="/play-button.png"
						alt="courses"
						width="14"
						height="14"
					/>
					<span>{noOfCourses} courses</span>
				</p>
				<p>
					<Image
						src="/account (1).png"
						alt="students"
						width="17"
						height="17"
					/>
					<span>{noOfStudentsEnrolled} students</span>
				</p>
			</div>
		</div>
	);
};

export default InstructorItem;
