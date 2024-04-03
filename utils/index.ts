export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '643357cf0bmshb4ae8ab847552fdp15aa50jsn3389abf5169a',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
