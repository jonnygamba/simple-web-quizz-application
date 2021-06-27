export default async function response(req, res) {
  const body = JSON.parse(req.body);

  const result = Object.keys(body).reduce(
    (acc, key, index) => {
      if (JSON.stringify(body[key]) === JSON.stringify(answers[key])) {
        return { ...acc, ok: acc.ok + 1 };
      } else {
        return { ...acc, notOk: acc.notOk + 1 };
      }
    },
    { ok: 0, notOk: 0 }
  );

  return res.send(JSON.stringify(result));
}

var answers = { 1: "A", 2: "A", 3: "A" };
