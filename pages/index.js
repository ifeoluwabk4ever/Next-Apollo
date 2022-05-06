import { useRouter } from "next/router";

export default function Home() {
	let navigate = useRouter();
	return navigate.push("/new/1");
}
