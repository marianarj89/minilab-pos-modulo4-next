import Link from "next/link";

export default function Layout({ children }) {
  return (
    <main className="layout">
      <div className="header">
        <h3> Pós Graduação Modulo 4 - JAMstack + NextJS </h3>
        <nav className="topnav">
        &nbsp; <Link href="/"> Home </Link>
          &nbsp; <Link href="/pagina1"> Página 1 SSR  </Link>
          &nbsp; <Link href="/pagina2"> Página 2 SSG </Link>
        </nav>
      </div>
      <div className="main">{children}</div>
    </main>
  );
}
