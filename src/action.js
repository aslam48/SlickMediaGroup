import axios from "axios";

export const fechitems = async (params) => {
  const result = await axios(
    `https://www.omdbapi.com/?apikey=2e22b3a2`, {params}
  );
  return result.data;
};


