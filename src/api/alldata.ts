import axios from "axios";

export const getApiData = async () => {
  const options = {
    method: "GET",
    headers: { accept: "application/json" },
  };
  await axios
    .get("https://api.upbit.com/v1/market/all?isDetails=false", options)
    .then((res) => res.data);
};
