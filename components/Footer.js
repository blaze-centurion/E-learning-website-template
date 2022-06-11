import { BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "@/styles/Home.module.css";

import { FOOTER_LINKS_DATA } from "../data/data";

const FooterLinkBox = ({ title, links }) => {
	return (
		<>
			<ul>
				<li className={styles.linkSecTitle}>{title}</li>
				{links.map((link, i) => (
					<li key={i}>
						<Link href={link.link}>
							<a>{link.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

const Footer = () => {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.linkSide}>
					<div className={styles.linksContainer}>
						{FOOTER_LINKS_DATA.map((link, i) => (
							<FooterLinkBox
								key={i}
								title={link.title}
								links={link.links}
							/>
						))}
					</div>
				</div>
				<div className={styles.logoSide}>
					<div className={styles.footerLogo}>
						<Image
							src="/logo.svg"
							width="150"
							height="40"
							alt="logo"
						/>
					</div>
					<p className={styles.copyright}>
						© 2022 YourBrand Made with by Roshan
					</p>
					<div className={styles.social}>
						<Link href="/">
							<a>
								<BsTwitter size={17} />
							</a>
						</Link>
						<Link href="/">
							<a>
								<FaFacebookF size={16} />
							</a>
						</Link>
						<Link href="/">
							<a>
								<BsPinterest size={17} />
							</a>
						</Link>
						<Link href="/">
							<a>
								<BsYoutube size={19} />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
