import express from "express";

const app = express();

app.get("/api/jokes", (req, res) => {
  const jokes = {
    jokes: [
      {
        id: 1,
        title: "Atomic Trust Issues",
        content:
          "Why don't scientists trust atoms? Because they make up everything!",
      },
      {
        id: 2,
        title: "Outstanding Scarecrow",
        content:
          "Why did the scarecrow win an award? Because he was outstanding in his field!",
      },
      {
        id: 3,
        title: "Penguin's Construction Skills",
        content: "How does a penguin build its house? Igloos it together!",
      },
      {
        id: 4,
        title: "Eyeless Fish",
        content: "What do you call a fish with no eyes? Fsh!",
      },
      {
        id: 5,
        title: "Sad Math Book",
        content:
          "Why did the math book look sad? Because it had too many problems.",
      },
    ],
  };

  res.json(jokes);
});

const port = process.env.PORT || 2004;

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
