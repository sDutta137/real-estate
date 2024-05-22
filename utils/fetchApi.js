import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      // 'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
      'x-rapidapi-key': 'b272e49399msh51ef072b00247bdp17edcajsn5390ee72963e'
    },
  });
    
  return data;
}