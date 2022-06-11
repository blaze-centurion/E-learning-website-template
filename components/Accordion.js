import { AiOutlinePlus, AiOutlineLock } from "react-icons/ai";
import React, { useState, useEffect } from "react";

import styles from "@/styles/Course.module.css";

const AccordionItem = ({ items, title }) => {
	const [height, setHeight] = useState(false);

	useEffect(() => {
		setHeight(getCssVar("--accordion-header-height"));
	}, []);

	const getCssVar = (s) => {
		let ele = document.querySelector(":root");
		let cs = getComputedStyle(ele);
		return cs.getPropertyValue(s);
	};

	return (
		<li
			onClick={() => {
				const headerSize = parseInt(
					getCssVar("--accordion-header-height")
				);
				const itemSize = parseInt(getCssVar("--accordion-item-height"));
				setHeight(
					height === headerSize
						? headerSize + items.length * itemSize
						: headerSize
				);
			}}
			className={styles.item}
			style={{
				height,
			}}
		>
			<div className={styles.header}>
				<AiOutlinePlus />
				<span>{title}</span>
			</div>
			<ul className={styles.itemDataBox}>
				{items.map((item, i) => {
					return (
						<li key={i} onClick={(e) => e.stopPropagation()}>
							<div>
								{item.icon}
								<span>{item.name}</span>
							</div>
							<AiOutlineLock />
						</li>
					);
				})}
			</ul>
		</li>
	);
};

const Accordion = ({ items }) => {
	return (
		<>
			<ul className={styles.accordion}>
				{items.map((item, i) => {
					return (
						<AccordionItem
							items={item.items}
							title={item.title}
							key={i}
						/>
					);
				})}
			</ul>
		</>
	);
};

export default Accordion;
