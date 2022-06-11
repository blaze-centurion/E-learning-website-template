import BreadCrumbs from "@/components/BreadCrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Home/Header";
import Image from "next/image";
import React from "react";

import styles from "@/styles/BecomeAnInstructor.module.css";

const BecomeAnInstructor = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.topContainer}>
					<BreadCrumbs />
					<div className={styles.banner}>
						<div>
							<h2 className={styles.title}>
								Become an Instructor
							</h2>
							<p className={styles.subtitle}>
								World&apos;s best instructors all around the
								globe teach millions of students on YourBrand.
							</p>
							<button className={styles.btn}>
								Start teaching today
							</button>
						</div>

						<div className={styles.imgBox}>
							<Image
								src="/become-a-teacher-hero-image.webp"
								alt="banner"
								layout="fill"
								blurDataURL="/light-gray-blur-background-vector.jpg"
								placeholder="blur"
							/>
						</div>
					</div>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						Discover Your Potential
					</h2>
					<div className={styles.cardBox}>
						<div className={styles.card}>
							<Image
								src="/money.svg"
								width="60"
								height="60"
								alt="money"
							/>
							<h3 className={styles.title}>Earn Money</h3>
							<p className={styles.desc}>
								Earn money every time a student purchases your
								course. Get paid monthly through Paypal or any
								net banking service.
							</p>
						</div>
						<div className={styles.card}>
							<Image
								src="/videos.svg"
								width="60"
								height="60"
								alt="videos"
							/>
							<h3 className={styles.title}>Inspire Students</h3>
							<p className={styles.desc}>
								Help people learn new skills, advance their
								careers, and explore their hobbies by sharing
								your knowledge.
							</p>
						</div>
						<div className={styles.card}>
							<Image
								src="/community.svg"
								width="60"
								height="60"
								alt="community"
							/>
							<h3 className={styles.title}>Join Our Community</h3>
							<p className={styles.desc}>
								Take advantage of our active community of
								instructors to help you through your course
								creation process.
							</p>
						</div>
					</div>
				</div>
				<div className={`${styles.section} ${styles.coloredSection}`}>
					<div className={styles.cardBox}>
						<div className={styles.card}>
							<Image
								src="/brain.svg"
								width="60"
								height="60"
								alt="brain"
							/>
							<h3
								className={`${styles.title} ${styles.numberTitle}`}
							>
								253085
							</h3>
							<p className={styles.subtitle}>Students Enrolled</p>
						</div>
						<div className={styles.card}>
							<Image
								src="/doc.svg"
								width="60"
								height="60"
								alt="courses"
							/>
							<h3
								className={`${styles.title} ${styles.numberTitle}`}
							>
								1205
							</h3>
							<p className={styles.subtitle}>Courses</p>
						</div>
						<div className={styles.card}>
							<Image
								src="/globe.svg"
								width="60"
								height="60"
								alt="globe"
							/>
							<h3
								className={`${styles.title} ${styles.numberTitle}`}
							>
								127
							</h3>
							<p className={styles.subtitle}>Countries</p>
						</div>
					</div>
				</div>
				<div>
					<h1 className={styles.bottomTitle}>
						Become an Instructor Today
					</h1>
					<h3 className={styles.bottomSubTitle}>
						Join the world&apos;s best online learning marketplace.
					</h3>
					<div className={styles.alignCenter}>
						<button className={styles.btn}>
							Start teaching today
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BecomeAnInstructor;
