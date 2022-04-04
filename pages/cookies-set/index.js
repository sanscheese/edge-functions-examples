import repoLink from "../../components/repo-link.js";

export default {
  title: "Setting cookies",
  description: "Set HTTP cookie values",
  page: function() {
    return `
    <section>
      <h1>Setting cookies</h1>
      <p>Use an Edge Function to create and manage HTTP cookies</p>
      <pre><code>import type { Context } from "netlify:edge";

export default async (req: Request, { next, cookies }: Context) => {
  
  // Set a cookie    
  cookies.set({
    name: "My cookie",
    value: "hello",
  });

};</code></pre>

    <h2>See this in action</h2>
    <ul>
      <li><a href="/cookies?action=set">Set a cookie</a></li>
      <li>${repoLink("cookies.ts")}</li>
    </ul>
    </section>
    <h2>Related</h2>
    <ul>
      <li><a href="/example/cookies-read">Read the value of a cookie</a></li>
      <li><a href="/example/cookies-delete">Delete a cookie</a></li>
    </ul>
    </section>
  `;
  },
};