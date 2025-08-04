import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from "vite-plugin-eslint"
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
const manifestForPlugIn = {
  registerType: 'prompt',
  includeAssests: ['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Pollutrack",
    short_name: "Pollutrack",
    description: "Pollutrack allows you to check aqi of your location and see the weather forcast",
    icons: [{
      src: '/icon.ico',
      sizes: '192x192',
      type: 'image/x-icon',
      purpose: 'favicon'
    },
    {
      src: '/icon.ico',
      sizes: '512x512',
      type: 'image/x-icon',
      purpose: 'favicon'
    },
    {
      src: '/icon.ico',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon',
    },
    {
      src: '/icon.ico',
      sizes: '512x512',
      type: 'image/x-icon',
      purpose: 'any maskable',
    }
    ],
    theme_color: '#171717',
    background_color: '#2c2cdbcc',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait'
  }
}
export default defineConfig({
  plugins: [react(), eslint(), VitePWA(manifestForPlugIn)],
})
