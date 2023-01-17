import Navbar from "../navbar";
import Footer from "../footer/Footer";
import Head from "next/head";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Star Themes</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
