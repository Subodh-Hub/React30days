import { useAddNewProductMutation } from "../redux/services/dummyApiData";
const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

  if (isError) {
    return <h1>Ohhhh!!! no something went wrong</h1>;
  }
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  const handleAddProduct = async () => {
    try {
      const newProduct = {
        id: 1,
        title: "Amazing Tshirt",
        description: "adsf asdf asdfadsfs",
      };

      await addNewProduct(newProduct);
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <div>
      <h1>{data?.title}</h1>
      <h1>{data?.category}</h1>
      <p>{data?.description}</p>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
