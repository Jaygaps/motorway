const baseCarsUrl = 'http://localhost:8000/api/cars';

export const fetchTaggedCars = async (tag: string) => {
  const response = await fetch(`${baseCarsUrl}?tag=${tag}`).then((response) => response.json());

  return response;
};
