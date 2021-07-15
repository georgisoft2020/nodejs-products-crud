import * as dotenv from "dotenv";
import express from "express";
import * as productCRUD from "./product/product-crud.router";

const path = require("path");
dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/** MIDDLEWARES */
// app.use(helmet());
// app.use(cors());
app.use(express.json()); // middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});
app.use("/", express.static(path.join(__dirname, "public")));

/** CREATE SERVER */
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Send message for default URL
app.get("/", (req, res) =>
  res.send("Welcome to NodeJs Simple Api App using TypeScript")
);

// Product CRUD
app.get("/products", productCRUD.getProductList);
app.get("/product/:id", productCRUD.getProduct);
app.post("/product", productCRUD.addProduct);
app.patch("/product", productCRUD.updateroduct);
app.delete("/product", productCRUD.deleteproduct);
app.apply;
