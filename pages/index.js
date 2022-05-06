import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
	let navigate = useRouter();
	useEffect(() => {
		navigate.push("/new/1");
	}, []);
	return <></>;
}
