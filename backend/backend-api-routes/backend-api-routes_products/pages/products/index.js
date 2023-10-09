import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Products() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("./api/products", fetcher);
  console.log("data", products);
  if (error) return <div>Failed to load...</div>;
  if (isLoading) return <div>loading...........</div>;

  return (
    <ul>
      {products.map((product) => {
        return <li key={product.id}>{product.name}</li>;
      })}
    </ul>
  );
}
