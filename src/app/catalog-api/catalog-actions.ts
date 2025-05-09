import bigData from '../data/es.json'

interface cityData {
  city: string,
  [key: string]: string
}

export function makeDataArray(): string[] {
  const arr: string[] = [];

  for (const item of bigData as cityData[]) {
    if (item.city.split(' ').length === 1) {
      arr.push(item.city);
    } else {
      arr.push(item.city.split(' ').join('_'));
    }
  }

  return arr;
}





export async function getImage(data: string[]): Promise<{ city: string; image?: string }[]> {
    let results: { city: string; image?: string }[] = [];

    for (const city of data) {
      try {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${city}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data for ${city}`);
        }

        const json = await res.json();
        const image = json.thumbnail?.source;
        const formattedCity = city.includes('_') ? city.split('_').join(' ') : city;

        results.push({ city: formattedCity, image });
      } catch (error) {
        console.warn(`Error for city ${city}:`, error);
      }
    }

    return results;
  }
