import Layout from "../components/layout";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Users from "../components/users";

const Index = (props) => {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>next.js home</title>
      </Head>
      <h1>Index</h1>
      <Users users={props.users} />
    </Layout>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default Index;
