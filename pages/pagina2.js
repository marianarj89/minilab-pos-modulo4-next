import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout.js";
import Image from "next/image";

export async function getStaticProps() {
  let user;
  await fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((response) => response.json())
    .then((data) => {
      user = data;
    });
  return {
    props: {
      user,
    },
    revalidate: 600,
  };
}

export default function Pagina1(props) {
  return (
    <Layout>
      <Head>
        <title> Página 2 </title>
      </Head>

      <main>
        <h1> Página 2 - Static Props / SSG Static Site Generation </h1>
        <h2> Olá {props.user.name}! </h2>
        <p> Static Props:
        In Next.js, "Static Generation" is a method of rendering pages where the HTML is generated at build time and is reused on each request. This provides performance benefits as the generated HTML can be cached and served to clients without the need for re-rendering on every request. When using Static Generation, you can also fetch data at build time and pass it as props to the page components.</p>

        <Image className="image"
          src="/images/staticprops.png"
          alt="SSP"
          width={596}
          height={627}
        />
      </main>

    </Layout>
  );
}
