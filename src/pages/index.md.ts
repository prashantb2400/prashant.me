import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Prashant Bhushan (@prashant)

Law & tech enthusiast from Jaunpur, India. Learning, building and figuring it out.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Twitter: [@prashant](https://twitter.com/knightofslights)
- GitHub: [@prashant](https://github.com/prashantb2400)
- Email: prashant@gmail.com

---

*This is the markdown-only version of prashant.me. Visit [prashant.me](https://prashant.me) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
