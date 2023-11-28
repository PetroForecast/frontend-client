// Here is where I get news from News API and display it on homepage 
const API_KEY = "930ceaf297544f81b46b63bf4d5c1830";

export const getNews = async (itemBody) => {
  try { //API returns 6 top-headlines related to gas from the us
    const gasResponse = await fetch('https://newsapi.org/v2/top-headlines?category=business&country=us&q=gas&pageSize=3&apiKe='+API_KEY);
    if (!gasResponse.ok) {
        throw new Error(`Fetch error: ${gasResponse.status}`);
    }
    const gas = await gasResponse.json();
    //API returns 6 top-headlines related to oil from the us
    const oilResponse = await fetch('https://newsapi.org/v2/top-headlines?category=business&country=us&q=oil&pageSize=3&apiKey='+API_KEY);
    if (!oilResponse.ok) {
        throw new Error(`Fetch error: ${oilResponse.status}`);
    }
    const oil = await oilResponse.json();
    const data = [...gas.articles, ...oil.articles];
    // console.log(data);
    return data
  } catch (error) {
      console.error('Error getting news:', error);
      throw error;
  }
};