export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export const company = {
  phones: [
    { display: "0771 291 1464", tel: "+9647712911464" },
    { display: "0780 241 8217", tel: "+9647802418217" },
  ],
  whatsapp: "9647712911464",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Zayouna, Al-Rubaie Street, Baghdad, Iraq"),
  mapsEmbed:
    "https://www.google.com/maps?q=" + encodeURIComponent("Al-Rubaie Street, Zayouna, Baghdad") + "&z=15&output=embed",
};
