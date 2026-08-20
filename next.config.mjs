import path from "node:path";
import { fileURLToPath } from "node:url";

const isDev = process.env.NODE_ENV === "development";

// Content Security Policy for a static, self-hosted site. `'unsafe-inline'`
// is required by Next.js for its bootstrapping script/style injection in
// this non-nonce setup (see next's CSP guide, "Without Nonces").
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self' data:;
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin Turbopack to this project's directory. Otherwise it walks up the
  // file tree looking for a lockfile and may find a stray one in a parent
  // folder (e.g. the user home directory), which produces a warning.
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
  // Hide the "X-Powered-By: Next.js" header to avoid advertising the stack.
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Apply hardening headers to every route.
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\s*\n\s*/g, " ").trim(),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
