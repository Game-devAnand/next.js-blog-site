import Image from "next/image";
import HomeBanner from "../components/banner";
import BlogCardTile from "../components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 ">
      <HomeBanner />
      <BlogCardTile />
    </main>
  );
}
