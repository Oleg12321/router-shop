import axios from "axios";
import { useParams } from "react-router-dom";

// export const fetchProducts = async () => {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/photos"
//   );
//   return data.filter((item) => item.id <= 10);
// }

export const fetchSingleProduct = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  return data;
}

export const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data.filter((item) => item.id <= 10);

}