/** @type {import("./types").Config} */
const config = {
  version: "1.0",
  name: "Sabda Literasi Palu",
  shortName: "Sabda Literasi Palu",
  description: "Sabda Literasi merupakan tempat penjualan Ebook Berbahasa Indonesia terlengkap dengan harga dua kali lebih murah dan tersedia dalam bentuk PDF.",
  direction: "auto",
  language: "id-ID",
  backgroundColor: "#fff",
  themeColor: "#f26926",
  display: "standalone",
  orientation: "any",
  scope: "/",
  startUrl: "/?utm_source=homescreen",
  screenshotSize: "540x720",
  appleStatusBarStyle: "black-translucent",
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: "Artike",
      shortName: "Artikel",
      description: "Kumpulan Artikel yang diterbitkan oleh sabdaliterasi palu dan akan update setiap harinya",
      url: "/artikel/?utm_source=homescreen"
    },
    {
      name: "Produk",
      shortName: "Produk",
      description: "Kumpulan Artikel yang diterbitkan oleh sabdaliterasi palu dan akan update setiap harinya",
      url: "/produk/?utm_source=homescreen"
    }
  ],
  pwa: {
    consoleLogs: true,
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: "0e1d2ad5-8ee3-44f0-a92c-500d9452befc",
      allowLocalhostAsSecureOrigin: true
    }
  }
};

module.exports = config;
