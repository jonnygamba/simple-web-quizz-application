import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-light-shade">
      <Link href="/the-quiz">
        <a className="text-4xl underline text-light-accent hover:text-main-brand font-bold">
          Start Quiz
        </a>
      </Link>
    </main>
  );
};

export default Index;
