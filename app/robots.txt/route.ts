import { NextResponse } from "next/server";

export async function GET() {
  // Define the content of the robots.txt file
  const content = `
    User-agent: *
    Allow: /

    Sitemap: https://www.ledeyn.com/sitemap.xml
  `;

  // Return the robots.txt content with appropriate headers
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
