import HomePage from "./home-page";
import { getTourDates } from "@/lib/tour-dates";

export default async function Page() {
  const tourDates = await getTourDates();

  return <HomePage tourDates={tourDates} />;
}
