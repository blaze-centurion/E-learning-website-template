import styles from "@/styles/Category.module.css";

import FilterListBox from "../FilterListBox";

const FilterCard = ({ items, filterName }) => {
	return (
		<>
			<div className={styles.filterCard}>
				<h2 className={styles.filterCardTitle}>
					Filter by {filterName}
				</h2>
				<FilterListBox items={items} />
			</div>
		</>
	);
};

export default FilterCard;
