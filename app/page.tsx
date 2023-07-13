import HomePage from "./home-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Title - Something here",
};

export default async function Page() {
  return <HomePage />;
}
