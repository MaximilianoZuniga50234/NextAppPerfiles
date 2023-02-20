import NavBar from "./navbar";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Next.js</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
        />
      </Head>
      <NavBar />
      <div className="container p-4">{props.children}</div>
    </div>
  );
};

export default Layout;
