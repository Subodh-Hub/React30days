import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    // get all products
    getAllProducts: builder.query({
      query: () => "/products",
    }),

    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `products/add`,
        method: "POST",
        header: { "Content-Type": "application-json" },
        body: newProduct,
      }),
    }),

    updateNewProductById: builder.mutation({
      query: (id, updatedProduct) => ({
        url: `products/${id}`,
        method: "PUT",
        header: { "Content-Type": "application-json" },
        body: updatedProduct,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
} = productsApi;
