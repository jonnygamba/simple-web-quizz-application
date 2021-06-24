import faker from "faker";

export default function questions(req, res) {
  const result = Array.from(
    {
      length: faker.datatype.number(9) + 1,
    },
    () => {
      return {
        text: faker.lorem.words(6),
        options: [
          { text: faker.lorem.words(3), option: "A" },
          { text: faker.lorem.words(3), option: "B" },
          { text: faker.lorem.words(3), option: "C" },
          { text: faker.lorem.words(3), option: "D" },
        ],
      };
    }
  );

  res.send(JSON.stringify(result));
}
