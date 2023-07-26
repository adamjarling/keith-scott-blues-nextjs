import HomePage from "./home-page";
import type { Metadata } from "next";
import { config } from "nttb-config";

// export const metadata: Metadata = {
//   title: "Page title goes here",
// };

export default async function Page() {
  return <HomePage />;
}
