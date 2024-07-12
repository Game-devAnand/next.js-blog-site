import SimpleNavClient from "@/components/simplenav/simplenav";
import HomeBanner from "../components/banner";
import Bloglist from "@/components/bloglist";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 mb-20">
      <SimpleNavClient />
      <Bloglist />
    </main>
  );
}
