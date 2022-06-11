import AboutSection from "@/components/Home/AboutSection";
import Banner from "@/components/Home/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Home/Header";
import Image from "next/image";
import Link from "next/link";
import ProductItem from "@/components/Home/ProductItem";
import TopCatItem from "@/components/Home/TopCatItem";

import styles from "@/styles/Home.module.css";
import { ALL_COURSES } from "data/data";

const Index = () => {
	return (
		<>
			<div className={styles.container}>
				<Header />
				<Banner />
				<AboutSection />
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Top categories</h2>
					<div className={`${styles.catSec}`}>
						<TopCatItem image="/creativity.png" title="Design" />
						<TopCatItem image="/coding.png" title="Development" />
						<TopCatItem image="/seo.png" title="Marketing" />
						<TopCatItem
							image="/computing.png"
							title="IT and Software"
						/>
						<TopCatItem
							image="/development.png"
							title="Personal Development"
						/>
						<TopCatItem image="/team.png" title="Business" />
						<TopCatItem
							image="/photographer.png"
							title="Photography"
						/>
						<TopCatItem image="/guitar.png" title="Music" />
					</div>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Popular Courses</h2>
					<div className={styles.productSec}>
						{ALL_COURSES.slice(0, 10).map((course, i) => {
							return (
								<ProductItem
									key={i}
									containerStyle={{
										minWidth: "270px",
									}}
									{...course}
								/>
							);
						})}
					</div>
				</div>

				<div className={styles.gridContainer}>
					<div className={`${styles.card} ${styles.bg1}`}>
						<h3 className={styles.title}>Become An Instructor</h3>
						<p className={styles.desc}>
							Top instructors from around the world teach millions
							of students on EduMall.
						</p>
						<Link href="/become-an-instructor">
							<button className={styles.btn}>
								Start teaching today
							</button>
						</Link>

						<div className={styles.imgBox}>
							<Image
								src="/banner-image-group-teachers.webp"
								alt="banner-image-group-teachers"
								width="240"
								height="140"
							/>
						</div>
					</div>
					<div className={`${styles.card} ${styles.bg2}`}>
						<h3 className={styles.title}>Access To Education</h3>
						<p className={styles.desc}>
							Create an account to access the top quality courses
							by professionals on any subject on YourBrand.
						</p>
						<Link href="/signup">
							<button className={styles.btn}>
								Register for free
							</button>
						</Link>

						<div className={styles.imgBox}>
							<Image
								src="/banner-image-laptop.webp"
								alt="banner-image-laptop"
								width="220"
								height="140"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Index;
