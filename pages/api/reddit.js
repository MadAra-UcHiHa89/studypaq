export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await fetch(
          "https://www.reddit.com/r/images/new.json?limit=100"
        );
        const result = await data.json();
        console.log("result", result);
        const resultantArray = result.data.children.map((item) => {
          return item.data.thumbnail;
        });

        res.status(200).json(resultantArray);
      } catch {
        res.status(500).json({ message: "Error getting the reddit posts" });
      }
      break;
    default:
      res.status(400).json({ message: "Invalid request" });
      break;
  }
};
