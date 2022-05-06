import Head from "next/head";
import React from "react";

const HeadTag = () => {
	return (
		<Head>
			<title>Next App</title>
			<meta name="description" content="Next App workout" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default HeadTag;
