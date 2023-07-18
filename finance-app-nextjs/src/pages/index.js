import React from "react";
import Head from "next/head";

// import "../styles/global.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Finance App - Productive</title>
      </Head>

      <div className="mt-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-3xl text-gray-800">
              Lista de tarefas
            </h1>

            <div className="flex items-center justify-center py-2 px-4 rounded bg-primary-600 text-white">
              Nextjs App
            </div>
          </div>
          <p className="text-gray-700">Bem vindo</p>
        </div>
      </div>
    </>
  );
}
