"use client";

import React from "react";
import useTourDates from "../hooks/use-tour-dates";

const tourDate = {
  offers: [
    {
      type: "Free",
      url: "https://www.bandsintown.com/t/104388394?app_id=479f600310e79e4c65edd7b6c286adef&came_from=267&custom=true&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
      status: "available",
    },
  ],
  venue: {
    street_address: "1963 N Lakeshore Dr",
    country: "United States",
    city: "Ludington",
    latitude: "43.9917016",
    name: "Stix Ludington",
    location: "Ludington, MI",
    postal_code: "49431",
    region: "MI",
    longitude: "-86.45999239999999",
  },
  starts_at: "2023-07-16T15:00:00",
  artist: {
    thumb_url: "https://photos.bandsintown.com/thumb/10356455.jpeg",
    mbid: "",
    facebook_page_url: "http://www.facebook.com/284974657920",
    image_url: "https://photos.bandsintown.com/large/10356455.jpeg",
    tracker_count: 309,
    tracking: [],
    upcoming_event_count: 80,
    url: "https://www.bandsintown.com/a/1677692?came_from=267&app_id=479f600310e79e4c65edd7b6c286adef",
    support_url: "",
    show_multi_ticket: true,
    name: "Keith Scott Blues",
    options: {
      display_listen_unit: false,
    },
    links: [
      {
        type: "instagram",
        url: "https://www.instagram.com/fishing_blues/",
      },
    ],
    artist_optin_show_phone_number: false,
    id: "1677692",
  },
  festival_datetime_display_rule: "",
  description: "",
  lineup: ["Keith Scott Blues"],
  festival_start_date: "",
  bandsintown_plus: false,
  title: "",
  artist_id: "1677692",
  url: "https://www.bandsintown.com/e/104388394?app_id=479f600310e79e4c65edd7b6c286adef&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
  datetime_display_rule: "datetime",
  datetime: "2023-07-16T15:00:00",
  on_sale_datetime: "",
  id: "104388394",
  ends_at: "",
  festival_end_date: "",
};

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
            className="flex items-center justify-between w-full py-6 border-b border-gray-200"
          >
            <div className="flex flex-col w-1/2 md:w-2/3 lg:w-3/4 md:flex-row">
              <h3>{niceDate}</h3>
              <div className="flex flex-col lg:flex-row md:pl-10">
                <div>{show.venue.name}</div>
                <div className="lg:pl-16">
                  {show.venue.city}, {show.venue.region}
                </div>
              </div>
            </div>
            <div className="">RSVP</div>
          </li>
        );
      })}
    </ul>
  );
};

export default TourDatesList;
