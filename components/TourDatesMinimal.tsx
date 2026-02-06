import { TourDate } from "@/lib/tour-dates";

interface TourDatesMinimalProps {
  tourDates: TourDate[];
}

function formatDate(datetime: string): string {
  return new Date(datetime).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export default function TourDatesMinimal({ tourDates }: TourDatesMinimalProps) {
  if (!tourDates || tourDates.length === 0) {
    return null;
  }

  return (
    <>
      {tourDates.map((td) => (
        <div className="flex flex-col items-center mb-5" key={td.id}>
          <div className="text-2xl entry-date">{formatDate(td.datetime)}</div>
          <div className="text-2xl text-center">
            <a href={td.url} target="_blank" rel="noopener noreferrer">
              @ {td.venue.name}
              {td.venue.city && (
                <span>
                  {" "}
                  - {td.venue.city}, {td.venue.region}
                </span>
              )}
            </a>
            {td.description && <p>{td.description}</p>}
          </div>
        </div>
      ))}
    </>
  );
}
