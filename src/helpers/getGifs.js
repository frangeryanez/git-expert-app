export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=YJgvmQimm57n9W7OmGLKCK00JhmwXHEm&q=${encodeURI(category)}&limit=10`
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(item => ({
    id: item.id,
    title: item.title,
    url: item.images?.downsized_medium.url
  }));

  return gifs;
};