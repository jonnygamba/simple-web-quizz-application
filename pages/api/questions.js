export default function Questions(req, res) {
  res.send(JSON.stringify(getQuestions()));
}

function getQuestions(n) {
  return [
    {
      id: 1,
      text:
        "What kind of test would you implement for verifying an email address validation function?",
      options: [
        {
          option: "A",
          text: "Integration test",
        },
        {
          option: "B",
          text: "Unit test",
        },
        {
          option: "C",
          text: "End to end",
        },
        {
          option: "D",
          text: "Manual test",
        },
      ],
    },
    {
      id: 2,
      text:
        "What performance optimization strategy you will NOT apply for DB read-intence applications?",
      options: [
        {
          option: "A",
          text: "Horizontal scaling",
        },
        {
          option: "B",
          text: "Vertical scaling",
        },
        {
          option: "C",
          text: "Queues",
        },
        {
          option: "D",
          text: "Caching",
        },
      ],
    },
    {
      id: 3,
      text:
        "You want to implement communication to a variety of courier APIs on your website, they all offer similar functionality but APIs are different. What pattern would you follow in this case?",
      options: [
        {
          option: "A",
          text: "Singleton",
        },
        {
          option: "B",
          text: "MVC",
        },
        {
          option: "C",
          text: "Strategy",
        },
        {
          option: "D",
          text: "CQRS",
        },
      ],
    },
  ];
}
