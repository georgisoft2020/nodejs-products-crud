import { Product } from "./product-crud.common";
import * as ProductService from "./product-crud.service";

export const getProductList = async (req: any, res: any) => {
  const productList: Product[] = await ProductService.getAllProducts();
  console.log(`in get ${JSON.stringify(productList)}`);
  try {
    res.status(200).send(productList);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

export const getProduct = async (req: any, res: any) => {
  const productEntry: Product | Object = await ProductService.getProduct(
    Number(req.params.id)
  );
  console.log(`in get ${JSON.stringify(productEntry)}`);
  try {
    res.status(200).send(productEntry);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

export const addProduct = async (req: any, res: any) => {
  const product: Product = req.body;
  await ProductService.addProduct(product);
  try {
    res.status(200).send({
      message: "Successfully added",
      IsSuccess: true,
      result: "",
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
};

export const updateroduct = async (req: any, res: any) => {
  const product: Product = req.body;
  await ProductService.updateProducts(product);
  try {
    res.status(200).send({
      message: "Successfully updated",
      IsSuccess: true,
      result: "",
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
};

export const deleteproduct = async (req: any, res: any) => {
  const productID: number = req.body["id"];
  await ProductService.deleteProducts(productID);
  try {
    res.status(200).send({
      message: "Successfully deleted",
      IsSuccess: true,
      result: "",
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
};
