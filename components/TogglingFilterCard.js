import { FILTER_DATA_COURSES } from "data/data";
import React from "react";

import styles from "@/styles/Courses.module.css";

import FilterListBox from "./FilterListBox";

const TogglingFilterCard = ({ active }) => {
	return (
		<>
			<div
				className={`${styles.filterBox}  ${
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
		</>
	);
};

export default TogglingFilterCard;
