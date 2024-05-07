import { defineConfig } from "cypress"

export default defineConfig({
    projectId: "wuwagt",
    e2e: {
        baseUrl: "http://localhost:3000"
    }
})
