import React from "react";

function formatDate(datetime: string): string {
  return new Date(datetime).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

const TourDates = ({ tourDates }: { tourDates: any }) => {
  return (
    <>
      {tourDates.map((td: any) => {
        return (
          <div className="flex flex-col items-center mb-5" key={td.id}>
            <div className="text-2xl entry-date">
              {formatDate(td.datetime)}
            </div>
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
              <p>{td.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TourDates;
