export default async function response(req, res) {
  const result = JSON.parse(req.body).reduce(
    (acc, answer, index) => {
      if (JSON.stringify(answer) === JSON.stringify(answers[index])) {
        return { ...acc, ok: acc.ok + 1 };
      } else {
        return { ...acc, notOk: acc.notOk + 1 };
      }
    },
    { ok: 0, notOk: 0 }
  );

  return res.send(JSON.stringify(result));
}

var answers = [{ 1: "A" }, { 2: "A" }, { 3: "A" }];
