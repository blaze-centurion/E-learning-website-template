import { ACCORDION_DATA, REQUIREMENTS, TAGS, TARGET_AUDIENCE } from "data/data";
import { BsArrowRightShort } from "react-icons/bs";
import AboutInstructor from "@/components/Courses/AboutInstructor";
import Accordion from "@/components/Accordion";
import BreadCrumbs from "@/components/BreadCrumbs";
import CourseCardRow from "@/components/Courses/CourseCardRow";
import CourseInfoBox from "@/components/Courses/CourseInfoBox";
import CoursePrerequisiteItem from "@/components/Courses/CoursePrerequisiteItem";
import CourseSection from "@/components/Courses/CourseSection";
import CourseTagComp from "@/components/Courses/CourseTagComp";
import Footer from "@/components/Footer";
import Header from "@/components/Home/Header";
import ListWithCheckedIcon from "@/components/ListWithCheckedIcon";

import styles from "@/styles/Course.module.css";

const Course = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div>
					<div className={styles.topContainer}>
						<BreadCrumbs />
						<CourseInfoBox />
					</div>
					<div className={styles.mainContainer}>
						<CourseSection title="Course Prerequisites">
							<CoursePrerequisiteItem
								title="Artificial Intelligence & Machine Learning"
								image="/c1.webp"
							/>
						</CourseSection>

						<CourseSection title="About This Course">
							<p className={styles.aboutText}>
								In this course, I take you from the fundamentals
								and concepts of data modeling all the way
								through a number of best practices and
								techniques that you’ll need to build data models
								in your organization. You’ll find many examples
								that clearly demonstrate the key concepts and
								techniques covered throughout the course. <br />
								<br />
								By the end of the course, you’ll be all set to
								not only put these principles to work, but also
								to make the key data modeling and design
								decisions required by the “art” of data modeling
								that transcend the nuts-and-bolts techniques and
								design patterns.
								<br />
								<br />
								Organisations, or groups of organisations, may
								establish the need for master data management
								when they hold more than one copy of data about
								a business entity. Holding more than one copy of
								this master data inherently means that there is
								an inefficiency in maintaining a “single version
								of the truth” across all copies. Unless people,
								processes and technology are in place to ensure
								that the data values are kept aligned across all
								copies, it is almost inevitable that different
								versions of information about a business entity
								will be held.
							</p>

							<CourseTagComp tags={TAGS} />
						</CourseSection>
						<CourseSection title="Requirements">
							<ListWithCheckedIcon items={REQUIREMENTS} />
						</CourseSection>
						<CourseSection title="Target Audience">
							<ListWithCheckedIcon
								items={TARGET_AUDIENCE}
								icon={<BsArrowRightShort size={16} />}
							/>
						</CourseSection>

						<CourseSection title="Curriculum">
							<Accordion items={ACCORDION_DATA} />
						</CourseSection>
						<CourseSection title="Your Instructors">
							<AboutInstructor />
						</CourseSection>
					</div>
				</div>
				<CourseCardRow />
			</div>
			<Footer />
		</>
	);
};

export default Course;
