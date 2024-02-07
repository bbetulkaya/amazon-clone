import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone | Betul</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        {/* Product */}
      </main>
    </div>
  );
}
