import React from "react";
import moment from "moment";

const TourDates = ({ tourDates }: { tourDates: any }) => {
  return (
    <>
      {tourDates.map((td: any) => {
        return (
          <div className="flex flex-col items-center mb-5" key={td.id}>
            <div className="text-2xl entry-date">
              {moment(td.datetime).format("MMM DD, YYYY")}
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
