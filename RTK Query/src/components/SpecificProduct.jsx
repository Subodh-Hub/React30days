import { useGetProductByIdQuery } from "../redux/services/dummyApiData";
const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(2);
  console.log("data", data);
  if (isError) {
    return <h1>Ohhhh!!! no something went wrong</h1>;
  }
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1>{data?.title}</h1>
      <h1>{data?.category}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default SpecificProduct;
