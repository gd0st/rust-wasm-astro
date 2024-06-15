import { defineConfig } from 'astro/config';
import wasm from "vite-plugin-wasm"
import topLevelAwait from "vite-plugin-top-level-await"

// https://astro.build/config
export default defineConfig({
	integrations: [wasm()],
	vite: {
		plugins: [wasm(), topLevelAwait()]
	}
});
