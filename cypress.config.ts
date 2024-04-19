import { defineConfig } from "cypress"

export default defineConfig({
    e2e: {
        baseUrl: "https://tailwind.gabrielrapucci.com.br",
        viewportWidth: 1366,
        viewportHeight: 768
    }
})
