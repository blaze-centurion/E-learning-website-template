import BreadCrumbs from "@/components/BreadCrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Home/Header";
import InstructorItem from "@/components/Categories/InstructorItem";
import React from "react";

import styles from "@/styles/Courses.module.css";
import { INSTRUCTORS } from "data/data";

const instructors = () => {
	return (
		<>
			<Header />
			<div className={styles.topContainer}>
				<BreadCrumbs />
				<h1 className={styles.title}>Instructors</h1>
			</div>

			<div className={styles.container}>
				<div className={styles.container_header}>
					<h3 className={styles.founded}>
						We found <b>10</b> instructors available for you
					</h3>
				</div>

				<div className={styles.instructors}>
					{INSTRUCTORS.map((item, i) => {
						return (
							<InstructorItem
								contentBoxStyle={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									paddingTop: 10,
								}}
								dFlexBoxStyle={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
								imageDim={{ width: 100, height: 100 }}
								{...item}
								key={i}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default instructors;
