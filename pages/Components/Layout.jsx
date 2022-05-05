import HeadTag from "./Head";

export const Layout = ({ children }) => {
	return (
		<>
			<HeadTag />
			<h1>Hi</h1>
			{children}
		</>
	);
};
