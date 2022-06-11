import { FiChevronDown, FiFilter } from "react-icons/fi";
import { ALL_COURSES, FILTER_DATA_COURSES } from "data/data";
import BreadCrumbs from "@/components/BreadCrumbs";
import FilterListBox from "@/components/FilterListBox";
import Footer from "@/components/Footer";
import Header from "@/components/Home/Header";
import Pagination from "@/components/Pagination";
import ProductItem from "@/components/Home/ProductItem";
import React, { useState } from "react";

import styles from "@/styles/Courses.module.css";

const Courses = () => {
	const [active, setActive] = useState(false);
	const [offset, setOffset] = useState(0);
	const LIMIT = 10;

	return (
		<>
			<Header />
			<div className={styles.topContainer}>
				<BreadCrumbs />
				<h1 className={styles.title}>Courses</h1>
			</div>

			<div className={styles.container}>
				<div className={styles.container_header}>
					<h3 className={styles.founded}>
						We found <b>{ALL_COURSES.length}</b> courses available
						for you
					</h3>
					<button
						className={styles.filterToggleBtn}
						onClick={() => setActive(!active)}
					>
						<FiFilter className={styles.icon} size={15} />
						Filter
						<FiChevronDown className={styles.icon} size={19} />
					</button>
				</div>
				<div
					className={`${styles.filterBox} ${
						active ? styles.active : null
					}`}
				>
					{FILTER_DATA_COURSES.map((item, i) => {
						return (
							<div className={styles.filterItem} key={i}>
								<h3 className={styles.filterName}>
									{item.filterName}
								</h3>
								<FilterListBox items={item.data} />
							</div>
						);
					})}
				</div>

				<div className={styles.content}>
					{ALL_COURSES.slice(
						offset * LIMIT,
						offset * LIMIT + LIMIT
					).map((item, i) => {
						return (
							<ProductItem
								key={i}
								containerStyle={{
									minWidth: "290px",
								}}
								{...item}
							/>
						);
					})}
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Pagination
						dataLen={ALL_COURSES.length}
						limit={LIMIT}
						offset={offset}
						setOffset={setOffset}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Courses;
