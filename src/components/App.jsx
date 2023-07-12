
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./Layout";
import ScrollToTop from './ToTopScroll/ToTopScroll';



export const App = () => {
	return (
		<>
			<Layout />

			<ScrollToTop />
			<ToastContainer transition={Slide} draggablePercent={60} />
		</>
	);
};
