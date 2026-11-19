import express from "express";

const app = express();

app.use(express.json());

const product = [];

// CREATE product
app.post("/product", (req, res) => {
    const newProduct = req.body;

    product.push(newProduct);

    res.status(201).json({
        message: "Product created successfully",
        product: newProduct
    });
});

// GET all products
app.get("/product", (req, res) => {
    res.status(200).json({
        message: "Products retrieved successfully",
        product: product
    });
});

// GET product by ID
app.get("/product/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const findProduct = product.find((p) => p.id === productId);

    if (findProduct) {
        res.status(200).json({
            message: "Product retrieved successfully",
            product: findProduct
        });
    } else {
        res.status(404).json({
            message: "Product not found"
        });
    }
});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/");
});