const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// This tells you exactly where the server is looking for the file
const DATA_PATH = path.join(__dirname, "data", "items.json");
console.log("SERVER IS READING FROM:", DATA_PATH);

// Helper function to get fresh data from the file
const getFreshItems = () => {
  const rawData = fs.readFileSync(DATA_PATH, "utf8");
  return JSON.parse(rawData);
};

// --- ROUTES ---

app.get("/items", (req, res) => {
  try {
    const items = getFreshItems(); // Read fresh from disk
    console.log(`Successfully sent ${items.length} items to frontend`);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Could not read data file" });
  }
});

app.get("/items/:id", (req, res) => {
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

app.post("/items", (req, res) => {
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

    // Save the new array back to the JSON file so it persists!
    fs.writeFileSync(DATA_PATH, JSON.stringify(items, null, 2));

    console.log(`✅ Added & Saved to Disk: ${newItem.name}`);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Could not save item" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));