import Link from "next/link";
import React from "react";
import Layout from "./Layout";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center justify-center dark:text-primaryDark">
          Build with
          <span className="text-2xl px-1 text-primary">&#9825;</span>by Varun
          Srinivasan
        </div>
        <Link href="/" className="underline underline-offset-2">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};
export default Footer;
