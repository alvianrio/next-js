import Head from 'next/head'
import Header from '@components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>All About NextJs</title>
      </Head>

      <main>
           <Header />
      </main>
    </>
  )
}