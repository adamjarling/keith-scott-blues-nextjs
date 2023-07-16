import { useEffect, useState } from "react";

function useTourDates() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const response = await fetch(
        "https://rest.bandsintown.com/artists/keithscottblues/events?app_id=479f600310e79e4c65edd7b6c286adef"
      );
      const data = await response.json();
      setDates(data);
    };
    fn();
  }, []);

  return dates;
}

export default useTourDates;
