import { useRouter } from "next/router";

const Result = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>ok: {query.ok}</h1>
      <h1>not ok: {query.notOk}</h1>
    </div>
  );
};

export default Result;
