import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Course.module.css";

import ListWithCheckedIcon from "../ListWithCheckedIcon";

const CourseCardRow = () => {
	return (
		<div className={styles.card_row}>
			<div className={styles.card}>
				<div className={styles.videoBox}>
					<iframe
						src="https://www.youtube.com/embed/gfDE2a7MKjA"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<div className={styles.contentBox}>
					<div className={styles.dFlex}>
						<h3 className={styles.price}>$46.00</h3>
						<h4 className={styles.discountedPrice}>$76.00</h4>
						<p className={styles.discountedPercent}>39% OFF</p>
					</div>
					<ul className={styles.courseDetailList}>
						<li>
							<label>
								<Image
									alt="level"
									src="/equalizer.png"
									width="14"
									height="14"
								/>
								<span>Level</span>
							</label>
							<p>Beginner</p>
						</li>
						<li>
							<label>
								<Image
									src="/clock.png"
									alt="duration"
									width="14"
									height="14"
								/>
								<span>Duration</span>
							</label>
							<p>15.3 hours</p>
						</li>
						<li>
							<label>
								<Image
									src="/presentation.png"
									alt="lectures"
									width="16"
									height="16"
								/>
								<span>Lectures</span>
							</label>
							<p>4 lectures</p>
						</li>
						<li>
							<label>
								<Image
									src="/tag.png"
									alt="subject"
									width="14"
									height="14"
								/>
								<span>Subject</span>
							</label>
							<p>Data Modeling</p>
						</li>
						<li>
							<label>
								<Image
									src="/global.png"
									alt="language"
									width="14"
									height="14"
								/>
								<span>Language</span>
							</label>
							<p>Russian</p>
						</li>
					</ul>
					<div style={{ padding: "5px 0" }}>
						<h3
							style={{
								fontWeight: "500",
								fontSize: "18px",
								color: "var(--mainText)",
							}}
						>
							Material Includes
						</h3>
						<ListWithCheckedIcon items={["Videos", "Booklets"]} />
					</div>
					<button className={`${styles.card_btn} ${styles.cart_btn}`}>
						Add to cart
					</button>
					<button className={styles.card_btn}>Add to wishlist</button>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.contentBox}>
					<h3 className={styles.cardTitle}>Course categories</h3>
					<ul className={styles.cardCatList}>
						<li>
							<Link href="/">
								<a>Art &amp; Design</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Business</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Data Science</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Development</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Finance</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Health &amp; Fitness</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Lifestyle</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Marketing</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Music</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Personal Development</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Photography</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>Teaching &amp; Academics</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CourseCardRow;
