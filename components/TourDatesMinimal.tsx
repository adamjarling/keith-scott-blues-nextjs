import React from "react";
import moment from "moment";

const TourDates = ({ tourDates }: { tourDates: any }) => {
  return (
    <>
      {tourDates.map((td: any) => {
        return (
          <div className="mb-5 event" key={td.id}>
            <div className="entry-date is-size-4">
              {moment(td.datetime).format("MMM DD, YYYY")}
            </div>
            <div className="entry-title">
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
