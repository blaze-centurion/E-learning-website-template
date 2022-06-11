import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<NextSeo
				title="YourBrand - Best E-learning Platform for everyone"
				description="YourBrand is the best e-learning platform where anyone could learn any skills from best instructors all around the globe."
				titleTemplate="YourBrand - Best E-learning Platform for everyone"
				defaultTitle="YourBrand - Best E-learning Platform for everyone"
				noindex={false}
				nofollow={false}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
