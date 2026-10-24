import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Prashant Bhushan (@knightofslights)

Law & tech enthusiast from Jaunpur, India. Learning, building and figuring it out.

## Navigation

- [About](/about.md)
- [All Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Twitter / X: [@knightofslights](https://twitter.com/knightofslights)
- GitHub: [@prashantb2400](https://github.com/prashantb2400)
- LinkedIn: [Prashant Bhushan](https://www.linkedin.com/in/prashant-bhushan-3815a535a/)
- Email: prashantbhushan24@gmail.com

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
