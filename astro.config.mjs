import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
// TODO change when moving to custom domain
export default defineConfig({
  site: "https://odeto.mom",
  base: "/",
  integrations: [react()],
});
