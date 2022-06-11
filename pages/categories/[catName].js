import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiChevronDown, FiFilter } from "react-icons/fi";
import {
	ALL_COURSES,
	FEATURED_COURSES,
	FILTER_DATA,
	INSTRUCTORS,
	POPULAR_COURSES,
} from "data/data";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import { useState } from "react";
import BreadCrumbs from "@/components/BreadCrumbs";
import CatPageSection from "@/components/Categories/CatPageSection";
import MyPagination from "@/components/Pagination";
import FilterCard from "@/components/Categories/FilterCard";
import Footer from "@/components/Footer";
import Header from "@/components/Home/Header";
import InstructorItem from "@/components/Categories/InstructorItem";
import ProductItem from "@/components/Home/ProductItem";
import TogglingFilterCard from "@/components/TogglingFilterCard";

import coursesStyles from "@/styles/Courses.module.css";
import styles from "@/styles/Category.module.css";

const BREAK_POINTS = {
	1300: {
		slidesPerView: 4,
	},
	1200: {
		slidesPerView: 3,
	},
	850: {
		slidesPerView: 3,
	},
	650: {
		slidesPerView: 2.5,
	},
	430: {
		slidesPerView: 1.5,
	},
	100: {
		slidesPerView: 1,
	},
};

const CategoriesCourses = () => {
	const { query } = useRouter();
	const [active, setActive] = useState(false);
	const [offset, setOffset] = useState(0);
	const LIMIT = 10;

	return (
		<>
			<div className={styles.container}>
				<Header />
				<div className={styles.topContainer}>
					<BreadCrumbs />
					<h1 className={styles.title}>{query.catName} Courses</h1>
				</div>
				<CatPageSection title="Most Popular">
					<Swiper
						spaceBetween={10}
						slidesPerView={4}
						modules={[Navigation, Pagination, A11y]}
						style={{ padding: "1rem 5px" }}
						pagination={{
							dynamicBullets: true,
							clickable: true,
						}}
						navigation
						breakpoints={BREAK_POINTS}
					>
						{POPULAR_COURSES.map((course, i) => {
							return (
								<SwiperSlide key={i}>
									<ProductItem {...course} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</CatPageSection>
				<CatPageSection title="Featured Courses">
					<Swiper
						spaceBetween={10}
						slidesPerView={4}
						modules={[Navigation, Pagination, A11y]}
						style={{ padding: "1rem 5px" }}
						pagination={{
							dynamicBullets: true,
							clickable: true,
						}}
						navigation
						breakpoints={BREAK_POINTS}
					>
						{FEATURED_COURSES.map((course, i) => {
							return (
								<SwiperSlide key={i}>
									<ProductItem {...course} featured={true} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</CatPageSection>

				<CatPageSection title="Popular Instructors">
					<Swiper
						spaceBetween={10}
						slidesPerView={4}
						modules={[Navigation, Pagination, A11y]}
						style={{ padding: "1rem 5px" }}
						pagination={{
							dynamicBullets: true,
							clickable: true,
						}}
						navigation
						breakpoints={{
							1200: {
								slidesPerView: 4,
							},
							900: {
								slidesPerView: 3,
							},
							660: {
								slidesPerView: 2.5,
							},
							420: {
								slidesPerView: 1.5,
							},
							100: {
								slidesPerView: 1,
							},
						}}
					>
						{INSTRUCTORS.map((item, i) => {
							return (
								<SwiperSlide key={i}>
									<InstructorItem {...item} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</CatPageSection>

				<CatPageSection title={`All ${query.catName} Courses`}>
					<div className={styles.allCouresContainer}>
						<div className={styles.filterBox}>
							{FILTER_DATA.map((item, i) => {
								return (
									<FilterCard
										key={i}
										items={item.data}
										filterName={item.filterName}
									/>
								);
							})}
						</div>
						<div className={styles.courseBox}>
							<div className={styles.courseBoxHeader}>
								<h3 className={styles.courseFounded}>
									We found <b>{ALL_COURSES.length}</b> courses
									available for you
								</h3>
								<button
									className={`${styles.filterToggleBtn} ${coursesStyles.filterToggleBtn}`}
									onClick={() => setActive(!active)}
								>
									<FiFilter
										className={coursesStyles.icon}
										size={15}
									/>
									Filter
									<FiChevronDown
										className={coursesStyles.icon}
										size={19}
									/>
								</button>
							</div>
							<TogglingFilterCard active={active} />
							<div className={styles.content}>
								{ALL_COURSES.slice(
									offset * LIMIT,
									offset * LIMIT + LIMIT
								).map((item, i) => {
									return (
										<ProductItem
											key={i}
											containerStyle={{
												minWidth: "280px",
												margin: "5px 0",
											}}
											{...item}
										/>
									);
								})}
							</div>
							<MyPagination
								dataLen={ALL_COURSES.length}
								limit={LIMIT}
								offset={offset}
								setOffset={setOffset}
							/>
						</div>
					</div>
				</CatPageSection>
			</div>
			<Footer />
		</>
	);
};

export default CategoriesCourses;
