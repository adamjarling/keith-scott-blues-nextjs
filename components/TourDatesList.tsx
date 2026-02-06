import Link from "next/link";
import { TourDate } from "@/lib/tour-dates";

interface TourDatesListProps {
  tourDates: TourDate[];
}

function formatDate(datetime: string): string {
  const date = new Date(datetime);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatTime(datetime: string): string {
  const date = new Date(datetime);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  return `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

export default function TourDatesList({ tourDates }: TourDatesListProps) {
  if (!tourDates || tourDates.length === 0) {
    return <p className="text-center text-gray-500">No upcoming shows scheduled.</p>;
  }

  return (
    <ul className="mb-10">
      {tourDates.map((show) => (
        <li
          key={show.id}
          className="grid w-full grid-cols-12 py-6 border-b border-gray-200"
        >
          <div className="flex flex-col col-span-8 md:col-span-9 md:flex-row">
            <h3 className="md:w-48">{formatDate(show.datetime)}</h3>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-96">{show.venue.name}</div>
              <div>
                {show.venue.city}, {show.venue.region}
              </div>
            </div>
          </div>
          <div className="col-span-4 text-right md:col-span-3">
            <Link href={show.url} target="_blank">
              RSVP
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
