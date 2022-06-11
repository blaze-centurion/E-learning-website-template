import { FcCheckmark } from "react-icons/fc";

const ListWithCheckedIcon = ({ items, icon = <FcCheckmark size={16} /> }) => {
	return (
		<>
			<ul className="checkedIconList">
				{items.map((item, i) => {
					return (
						<li key={i}>
							{icon}
							<span>{item}</span>
						</li>
					);
				})}
			</ul>

			<style jsx>{`
				.checkedIconList {
					padding: 5px 0;
				}
				.checkedIconList li {
					list-style: none;
					margin: 10px 0;
					display: flex;
				}
				.checkedIconList li span {
					font-size: 14px;
					color: #333;
					margin: 0 5px;
					flex: 1;
				}

				@media (max-width: 370px) {
					.checkedIconList li span {
						font-size: 13.5px;
					}
				}
			`}</style>
		</>
	);
};

export default ListWithCheckedIcon;
