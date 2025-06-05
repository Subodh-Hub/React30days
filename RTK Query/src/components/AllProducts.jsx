import { useGetAllProductsQuery } from "../redux/services/dummyApiData";

const AllProducts = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();
  console.log("data", data);
  if (isError) {
    return <h1>Ohhhh!!! no something went wrong</h1>;
  }
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      {data.products.map((item) => (
        <div key={item.id}>
          <h1>{item?.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
