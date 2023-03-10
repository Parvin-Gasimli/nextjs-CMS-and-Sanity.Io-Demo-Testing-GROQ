import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { SanityClient } from "next-sanity";
import { async } from "rxjs";
import { sanityClient } from "@/sanity";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ properties }) {
  console.log(properties);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>PERSON GET API DTA </h1>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type=="property"]';
  const properties = await sanityClient.fetch(query);
  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    };
  } else {
    return {
      props: {
        properties,
      },
    };
  }
};
