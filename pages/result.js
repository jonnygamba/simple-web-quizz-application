import { useRouter } from "next/router";
import { Check, X } from "../src/icons";

const Result = () => {
  const { query } = useRouter();

  return (
    <main className="font-semibold bg-dark-shade text-light-shade min-h-screen flex justify-center items-center text-3xl">
      <h1 className="flex items-center w-20">
        <Check /> {query.ok}
      </h1>
      <h1 className="flex items-center">
        <X /> {query.notOk}
      </h1>
    </main>
  );
};

export default Result;
