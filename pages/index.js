import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/table.module.css";
import Image from "next/image";

export default function Home() {
  const tableData = [
    {
      id: 1,
      bug: "BUG na instalação 404 no index",
      description:
        "Foi criada uma pasta /src na instalação, e as páginas estavam sendo criadas na pasta /pages, a pasta /src e seu conteúdo foram movidos ou deletados e o problema foi resolvido",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home - Pós Graduação Modulo 4 JAMstack + NextJS</h1>
        <h3>
          Next.js possui duas formas de pré-renderização: geração estática e
          renderização no lado do servidor. A diferença está em quando ele gera
          o HTML de uma página.
        </h3>
        <p>
          1. A renderização do lado do servidor é o método de pré-renderização
          que gera o HTML em cada solicitação.
        </p>
        <p>
          2. A geração estática é o método de pré-renderização que gera o HTML
          no momento da construção. O HTML pré-renderizado é então reutilizado
          em cada solicitação
        </p>

        <h1> REMEMBER: React = LIBRARY / NextJS = FRAMEWORK </h1>
        <p> LIBRARY: Nível de controle e fluxo, IOC inversion of control, o DEV controla o fluxo e chama as funções, quando necessário.</p>

      
        <p> FRAMEWORK: Estende a funcionalidades do REACT, com SSR e SSG, o Framework controle o fluxo e fornece lugares para executar o código</p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Problema</th>
              <th>Solução</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.bug}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Image className="image"
          src="/images/consider.png"
          alt="SSP"
          width={636}
          height={698}
        />
      </main>
    </Layout>
  );
}
