import DashNavbar from "../components/Navbar/DashNavbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DashNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
