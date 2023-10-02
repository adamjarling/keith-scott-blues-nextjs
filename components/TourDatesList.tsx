"use client";

import Link from "next/link";
import React from "react";
import { bandsInTownResponseShape } from "@/data/shows";
import useTourDates from "../hooks/use-tour-dates";

// Example data structure from BandsInTown API response

const TourDatesList = () => {
  const tourDates = useTourDates();
  if (!tourDates) return null;

  return (
    <ul className="mb-10">
      {tourDates.map((show: any) => {
        const date = new Date(show.datetime);
        const options = {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        };
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "pm" : "am";
        const formattedTime = `${hours % 12}:${
          minutes < 10 ? "0" : ""
        }${minutes} ${ampm}`;

        // @ts-ignore
        const niceDate = date.toLocaleDateString("en-US", options);

        return (
          <li
            key={show.id}
            className="grid w-full grid-cols-12 py-6 border-b border-gray-200"
          >
            <div className="flex flex-col col-span-8 md:col-span-9 md:flex-row">
              <h3 className="md:w-48">{niceDate}</h3>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-96">{show.venue.name}</div>
                <div className="">
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
        );
      })}
    </ul>
  );
};

export default TourDatesList;
