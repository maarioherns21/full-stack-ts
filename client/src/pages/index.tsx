import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import { useSession, getSession, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  const handleGoogleSignOut = async () => {
    signOut();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleGoogleSignOut }) : Guest()}
    </div>
  );
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link href={"/login"}>
          <span className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign In
          </span>
        </Link>
      </div>
    </main>
  );
}

// Authorize User
function User({ session, handleGoogleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleGoogleSignOut}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50"
        >
          Sign Out
        </button>
      </div>

      <div className="flex justify-center">
        <Link href={"/profile"}>
          <span className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Profile Page
          </span>
        </Link>
      </div>
    </main>
  );
}

/// this Protectes the Routes
export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
