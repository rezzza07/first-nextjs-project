const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());


const DATA_PATH = path.join(process.cwd(), "server", "data", "items.json");


const getFreshItems = () => {
  try {
    const rawData = fs.readFileSync(DATA_PATH, "utf8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return []; 
  }
};


app.get("/api/items", (req, res) => {
  try {
    const items = getFreshItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Could not read data file" });
  }
});

app.get("/api/items/:id", (req, res) => {
  try {
    const items = getFreshItems();
    const item = items.find(i => i.id.toString() === req.params.id.toString());
    
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Grocery item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error searching for item" });
  }
});

app.post("/api/items", (req, res) => {
  try {
    const items = getFreshItems();
    const { name, price, description, category, image, stock } = req.body;
    
    const newItem = {
      id: Date.now().toString(), 
      name,
      price: Number(price),      
      description,
      category: category || "General",
      image: image || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400",
      stock: stock || "In Stock"
    };

    items.push(newItem);

    
    fs.writeFileSync(DATA_PATH, JSON.stringify(items, null, 2));

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Could not save item" });
  }
});


module.exports = app;


if (process.env.NODE_ENV !== 'production') {
  const PORT = 5000;
  app.listen(PORT, () => console.log(`🚀 Local Server: http://localhost:${PORT}`));
}