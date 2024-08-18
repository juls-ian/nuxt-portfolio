import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

// route
export default defineEventHandler(async (event) => {
  // Fetch all documents (content finder)
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: "http://localhost:3000",
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "monthly",
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
