import { useEffect, useState } from "react";

function useTourDates() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        "https://rest.bandsintown.com/artists/keithscottblues/events?app_id=5739cecf1ee2ec8738afae4ed1ffd78d"
      );
      const data = await response.json();
      setDates(data);
    };
    fn();
  }, []);

  return dates;
}

export default useTourDates;
