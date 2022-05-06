import Link from "next/link";
import { AUTH_TOKEN } from "../constant";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
	const [authToken, setAuthToken] = useState("");
	let navigate = useRouter();
	useEffect(() => {
		// Perform localStorage action
		const item = localStorage.getItem(AUTH_TOKEN);
		setAuthToken(item);
	}, []);
	return (
		<div className="flex pa1 justify-between nowrap orange">
			<div className="flex flex-fixed black">
				<Link href="/" className="no-underline black">
					<div className="fw7 mr1">Hacker News</div>
				</Link>
				<Link href="/" className="ml1 no-underline black capitalize">
					new
				</Link>
				<div className="ml1">|</div>
				<Link href="/top" className="ml1 no-underline black capitalize">
					top
				</Link>
				<div className="ml1">|</div>
				<Link href="/search" className="ml1 no-underline black capitalize">
					search
				</Link>
				{authToken && (
					<div className="flex">
						<div className="ml1">|</div>
						<Link
							href="/create"
							className="ml1 no-underline black capitalize">
							submit
						</Link>
					</div>
				)}
			</div>
			<div className="flex flex-fixed">
				{authToken ? (
					<div
						className="ml1 pointer black"
						onClick={() => {
							localStorage.removeItem(AUTH_TOKEN);
							navigate.push(`/`);
						}}>
						logout
					</div>
				) : (
					<Link
						href="/login"
						className="ml1 no-underline black capitalize">
						login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
