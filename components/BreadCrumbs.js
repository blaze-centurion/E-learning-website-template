import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const BreadCrumbs = () => {
	const router = useRouter();
	const [breadcrumbsLink, setBreadcrumbsLink] = useState([]);

	useEffect(() => {
		setBreadcrumbsLink(router.asPath.split("/").filter((x) => x));
	}, [router.asPath]);

	return (
		<>
			<ul className="breadcrumb">
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				{breadcrumbsLink.map((item, i) => {
					return (
						<li
							key={i}
							className={
								i + 1 >= breadcrumbsLink.length ? "active" : ""
							}
						>
							<Link
								href={`/${breadcrumbsLink
									.slice(0, i + 1)
									.join("/")}`}
							>
								<a>{decodeURI(item).split("-").join(" ")}</a>
							</Link>
						</li>
					);
				})}
			</ul>
			<style jsx>{`
				ul.breadcrumb {
					padding: 10px 0px;
					list-style: none;
				}

				ul.breadcrumb li {
					display: inline;
					text-transform: capitalize;
					font-size: 13px;
					font-weight: 500;
				}
				ul.breadcrumb li.active a {
					color: var(--primary);
				}

				ul.breadcrumb li + li::before {
					padding: 8px;
					color: var(--darkMainText);
					content: "/";
				}

				ul.breadcrumb li a {
					color: var(--mainText);
					text-decoration: none;
				}

				ul.breadcrumb li a:hover {
					color: var(--primary);
					text-decoration: underline;
				}
			`}</style>
		</>
	);
};

export default BreadCrumbs;
