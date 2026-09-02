import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// The actual website is a standalone vanilla HTML/CSS/JS site at /site/index.html
// (public/site). This route just forwards the preview there.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bishow Gyawali — little sounds made with code" },
      { name: "description", content: "Bishow Gyawali makes small experimental songs with code using Strudel." },
      { property: "og:title", content: "Bishow Gyawali — little sounds made with code" },
      { property: "og:description", content: "Small experimental songs made with Strudel. Listen, and peek at the code." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/site/index.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <a href="/site/index.html" className="text-sm text-muted-foreground underline">
        Opening the site…
      </a>
    </div>
  );
}
