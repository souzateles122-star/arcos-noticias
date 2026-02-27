import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const apiKey = "44c14e41c0674b06a62d584ee3b7970a";
    const url = `https://newsapi.org/v2/top-headlines?country=br&language=pt&pageSize=5&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json({ articles: data.articles });
  } catch (err) {
    res.status(500).json({ error: "Não foi possível buscar as notícias." });
  }
}
