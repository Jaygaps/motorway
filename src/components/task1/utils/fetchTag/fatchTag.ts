const baseTagUrl = 'http://localhost:8000/api/tags';

export const fetchTag = async (tag: string) => {
  const response = await fetch(`${baseTagUrl}?tag=${tag}`)
    .then((response) => response.json())
    .then((response) => response.map((res, key) => ({ id: key, name: res })));

  return response;
};
