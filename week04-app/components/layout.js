import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Week 4 Next JS App W. Richman</title>
      </Head>
      <header>
        <nav>
          <h1 class="text-center">Menu Of Random Things I Have Made</h1>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a class="btn btn-primary mt-3">← Back to home</a>
          </Link>
        )
      }
    </div>
  );
}