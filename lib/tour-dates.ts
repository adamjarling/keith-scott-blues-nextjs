export interface TourDate {
  id: string;
  datetime: string;
  description: string;
  url: string;
  venue: {
    name: string;
    city: string;
    region: string;
    country: string;
  };
}

const ARTIST_ID = "keithscottblues";

export async function getTourDates(): Promise<TourDate[]> {
  const appId = process.env.BANDSINTOWN_APP_ID;

  if (!appId) {
    console.error("BANDSINTOWN_APP_ID environment variable is not set");
    return [];
  }

  try {
    const response = await fetch(
      `https://rest.bandsintown.com/artists/${ARTIST_ID}/events?app_id=${appId}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      console.error("Failed to fetch tour dates:", response.statusText);
      return [];
    }

    const data = await response.json();
    return data as TourDate[];
  } catch (error) {
    console.error("Error fetching tour dates:", error);
    return [];
  }
}
