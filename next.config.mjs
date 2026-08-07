import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin Turbopack to this project's directory. Otherwise it walks up the
  // file tree looking for a lockfile and may find a stray one in a parent
  // folder (e.g. the user home directory), which produces a warning.
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
