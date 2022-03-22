import repoLink from "../../components/repo-link.js";

export default function page() {
  return `
    <h1>Transform responses</h1>
    <p>
      You can use Edge Functions to transform the content of an HTTP response. In this example, we transform the response of a request to <a href="/hello">/hello</a> with a simple <code>toUpperCase()</code> function.
    </p>
    <ul>
      <li><a href="/hello">The original response from /hello</a> without a transform</li>
      <li>The response from /hello <a href="/hello?method=transform">dynamically transformed with an Edge Function</a></li>
      <li>${repoLink('transform.ts')}</li>
    </ul>
`;
}