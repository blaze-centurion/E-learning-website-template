import React from "react";

import {
	HiOutlineChevronDoubleRight,
	HiOutlineChevronDoubleLeft,
} from "react-icons/hi";

const Pagination = ({ dataLen, limit, offset, setOffset }) => {
	const noOfPages = Math.ceil(dataLen / limit);
	return (
		<>
			<ul className="pagination">
				<li
					className={`${offset - 1 < 0 ? "disabled" : ""}`}
					onClick={() => {
						if (offset - 1 < 0) return;
						setOffset(offset - 1);
					}}
				>
					<HiOutlineChevronDoubleLeft />
				</li>
				{[...new Array(noOfPages).keys()].map((item, i) => {
					return (
						<li
							className={`${offset === item ? "active" : ""}`}
							key={i}
							onClick={() => setOffset(item)}
						>
							{item + 1}
						</li>
					);
				})}
				<li
					className={`${offset + 1 >= noOfPages ? "disabled" : ""}`}
					onClick={() => {
						if (offset + 1 >= noOfPages) return;
						setOffset(offset + 1);
					}}
				>
					<HiOutlineChevronDoubleRight />
				</li>
			</ul>

			<style jsx>{`
				.pagination {
					display: flex;
					align-items: center;
					list-style: none;
					margin-top: 10px;
				}
				.pagination li {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 40px;
					height: 40px;
					background: white;
					color: var(--mainText);
					font-size: 14px;
					font-weight: 500;
					margin: 10px 3px;
					border-radius: 50%;
					cursor: pointer;
					transition: all 0.3s;
				}
				.pagination li:hover,
				.pagination li.active {
					background: var(--primary);
					color: #fff;
				}
				.pagination li.disabled,
				.pagination li.hover {
					background: white;
					color: var(--mainText);
					opacity: 0.6;
					cursor: not-allowed;
				}

				@media (max-width: 380px) {
					.pagination li {
						width: 35px;
						height: 35px;
					}
				}
			`}</style>
		</>
	);
};

export default Pagination;
