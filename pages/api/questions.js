export default function Questions(req, res) {
  res.send(JSON.stringify(getQuestions(Math.floor(Math.random() * 10))));
}

function getQuestions(n) {
  const questions = [
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
    {
      id: 4,
      text:
        "Which one of SOLID principles would encourage you to define more interfaces in your code?",
      options: [
        {
          option: "A",
          text: "Don't repeat yourself principle",
        },
        {
          option: "B",
          text: "Dependency inversion principle",
        },
        {
          option: "C",
          text: "Open-close principle",
        },
        {
          option: "D",
          text: "Single responsibility principle",
        },
      ],
    },
    {
      id: 5,
      text:
        "Which mechanism allows you to define rules of access to APIs located on a different than your javascript file domain?",
      options: [
        {
          option: "A",
          text: "Ajax",
        },
        {
          option: "B",
          text: "CSRF",
        },
        {
          option: "C",
          text: "CORS",
        },
        {
          option: "D",
          text: "CROCS",
        },
      ],
    },
    {
      id: 6,
      text:
        "Dynamic change of which property will lead to the largest performance drawback?",
      options: [
        {
          option: "A",
          text: "background",
        },
        {
          option: "B",
          text: "transform",
        },
        {
          option: "C",
          text: "width",
        },
        {
          option: "D",
          text: "border-color",
        },
      ],
    },
    {
      id: 7,
      text:
        "What input type will be the most convenient for iPhone user to enter numbers?",
      options: [
        {
          option: "A",
          text: "text",
        },
        {
          option: "B",
          text: "number",
        },
        {
          option: "C",
          text: "tel",
        },
        {
          option: "D",
          text: "text-area",
        },
      ],
    },
    {
      id: 8,
      text: "What data type is passed by value?",
      options: [
        {
          option: "A",
          text: "string",
        },
        {
          option: "B",
          text: "object",
        },
        {
          option: "C",
          text: "array",
        },
        {
          option: "D",
          text: "function",
        },
      ],
    },
    {
      id: 9,
      text: "What will you use to create the most accurate timer on the page?",
      options: [
        {
          option: "A",
          text: "setTimeout",
        },
        {
          option: "B",
          text: "setInterval",
        },
        {
          option: "C",
          text: "while",
        },
        {
          option: "D",
          text: "requestAnimationFrame",
        },
      ],
    },
    {
      id: 10,
      text: "What was a patronus of Professor Severus Snape?",
      options: [
        {
          option: "A",
          text: "doe",
        },
        {
          option: "B",
          text: "spider",
        },
        {
          option: "C",
          text: "wolf",
        },
        {
          option: "D",
          text: "rabbit",
        },
      ],
    },
  ];

  return questions.slice(0, n);
}
