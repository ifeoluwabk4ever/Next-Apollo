import HeadTag from "./Head";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
	return (
		<div className="center w85">
			<HeadTag />
			<Navbar />
			<div className="ph3 pv1 background-gray">{children}</div>
		</div>
	);
};
