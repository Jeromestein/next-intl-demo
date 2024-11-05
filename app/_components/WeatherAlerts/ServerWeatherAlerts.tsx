// app/_components/WeatherAlerts/ServerWeatherAlerts.tsx

import { type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import ClientWeatherAlerts from "./ClientWeatherAlerts";

/* In a production app, we would likely
 * be fetching these from some service.
 */
const mockWeatherAlerts = {
    "en-us": [
        "🌩️ Severe Thunderstorm Warning until 09:00 PM",
        "🌨️ Blizzard Warning in effect from 01:00 AM",
        "🌊 Coastal Flood Advisory from noon today to 10:00 PM",
    ],
    "ar-eg": [
        "🌩️ تحذير من عاصفة رعدية شديدة حتى الساعة 09:00 مساءً",
        "🌨️ تحذير من عاصفة ثلجية قائمة بدءًا من الساعة 01:00 صباحًا",
        "🌊 تنبيه من فيضان ساحلي من الظهيرة اليوم حتى الساعة 10:00 مساءً",
    ],
};

export default function ServerWeatherAlerts() {
    const t = useTranslations("WeatherAlerts");

    const locale = useLocale() as Locale;
    const alerts = mockWeatherAlerts[locale];

    return (
        // Pass the translation message as a prop.
        <ClientWeatherAlerts title={t("title")}>
            {/* Inject alerts as children. */}
            {alerts.map((alert) => (
                <p className="py-2" key={alert}>
                    {alert}
                </p>
            ))}
        </ClientWeatherAlerts>
    );
}