import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout.js";
import Image from "next/image";



export async function getServerSideProps() {
  let user;
  await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      user = data;
    });
  return {
    props: {
      user,
    },
  };
}

export default function Pagina1(props) {
  return (
    <Layout>
      <Head>
        <title> Página 1 </title>
      </Head>

      <main>
        <h1> Página 1 - Server Side Props / SSR Server Side Rendering </h1>
        <h2> Olá {props.user.name}! </h2>
        <p>
          {" "}
          Server-Side Props: Server-Side Props refer to a feature in Next.js
          that allows you to fetch data on the server side and pass it as props
          to your React components before they are rendered. This is often used
          in conjunction with the getServerSideProps function, which runs on
          every request to the server. This allows you to fetch data dynamically
          based on the request and provide it as initial props to the page
          component.{" "}
        </p>

        <Image className="image"
          src="/images/serversideprops.png"
          alt="SSP"
          width={593}
          height={616}
        />
      </main>
    </Layout>
  );
}
