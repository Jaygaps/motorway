const tagsUrl = 'http://localhost:8000/api/tags';

export const fetchAllTags = async () => {
  const response = await fetch(tagsUrl)
    .then((response) => response.json())
    .then((response) => response.map((res, key) => ({ id: key, name: res })));

  return response;
};
