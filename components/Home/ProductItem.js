import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Home.module.css";

const ProductItem = ({
	productName,
	productBanner,
	productRating,
	noOfStudents,
	noOfLectures,
	productDuration,
	containerStyle,
	free,
	featured,
	price = "$119.99",
	discount,
	level = "Basic",
}) => {
	return (
		<div className={styles.productItem} style={containerStyle}>
			<div className={styles.productImgBox}>
				{featured && (
					<p className={`${styles.courseLevel} ${styles.featured}`}>
						Featured
					</p>
				)}
				{free && (
					<p className={`${styles.courseLevel} ${styles.free}`}>
						Free
					</p>
				)}
				<Image
					alt={productName}
					src={productBanner}
					layout="fill"
					blurDataURL="/light-gray-blur-background-vector.jpg"
					placeholder="blur"
				/>
			</div>
			<div className={styles.contentBox}>
				<span>
					<p className={styles.courseLevel}>{level}</p>
				</span>
				<Link href={`/courses/webdev`}>
					<a className={styles.productName}>{productName}</a>
				</Link>
				<div className={styles.detailBox}>
					<div className={styles.pItemFlex}>
						<p className={styles.pItemInfo}>
							<AiFillStar />
							<span>{productRating}/5</span>
						</p>
						<p className={styles.pItemInfo}>
							<Image
								src="/student.png"
								alt="students"
								width="20"
								height="20"
							/>
							<span>{noOfStudents} Students</span>
						</p>
					</div>
					<div className={styles.pItemFlex}>
						<p className={styles.pItemInfo}>
							<Image
								src="/clock.png"
								alt="duration"
								width="17"
								height="17"
							/>
							<span>{productDuration}</span>
						</p>
						<p className={styles.pItemInfo}>
							<Image
								src="/presentation.png"
								alt="lectures"
								width="20"
								height="20"
							/>
							<span>{noOfLectures} Lectures</span>
						</p>
					</div>
				</div>
			</div>
			<div className={styles.separator}></div>
			<div className={`${styles.pItemFlex} ${styles.profileBox}`}>
				<div className={styles.profilePic}>
					<Image
						alt="Jhon Smith"
						src="/user.jpg"
						width="30"
						height="30"
					/>
					<h3 className={styles.teacherName}>John Smith</h3>
				</div>
				<div className={styles.priceBox}>
					<h3 className={styles.price}>
						{free ? "Free" : discount || price}
					</h3>
					{(!free && !discount) || (
						<p className={styles.discount}>{price}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
