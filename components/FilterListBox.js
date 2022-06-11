import React from "react";

const FilterListBox = ({ items }) => {
	return (
		<>
			<ul className="filterItems">
				{items.map((item, i) => {
					return (
						<li key={i}>
							<input type="checkbox" />
							<p>
								{item.name}{" "}
								<span>
									{item.moreDetail && `(${item.moreDetail})`}
								</span>
							</p>
						</li>
					);
				})}
			</ul>

			<style jsx>{`
				.filterItems li {
					list-style: none;
					display: flex;
					align-items: center;
					margin: 12px 0;
				}
				.filterItems li p {
					font-size: 14px;
					text-transform: capitalize;
					padding: 0 8px;
				}
				.filterItems li p span {
					color: var(--bodyText);
				}
			`}</style>
		</>
	);
};

export default FilterListBox;
