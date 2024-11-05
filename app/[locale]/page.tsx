// app/[locale]/page.tsx
import { useTranslations, useFormatter } from "next-intl";
import ServerWeatherAlerts from "@/app/_components/WeatherAlerts/ServerWeatherAlerts";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  /*
   * Some notes on static rendering
   * - The unstable_setRequestLocale is a temporary solution 
   * due to Next.js limitations: 
   * Server Components can’t directly access route parameters like locale. 
   * Future next-intl updates may eliminate this requirement. 
   * Find out more in the next-intl Static rendering documentation.
   * - Using generateStaticParams to specify every supported locale 
   * can impact build performance, especially for sites with many locales. 
   * It’s often more efficient to specify only the default locale 
   * and dynamically generate others as needed.
   * - Statically exporting your site with next-intl has 
   * some important limitations. Refer to the Usage 
   * without middleware (static export) section 
   * in the next-intl documentation for guidance.
   */
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  const format = useFormatter();
  return (
    <main>
      <p className="mx-auto mb-2 w-max rounded-sm bg-slate-800 px-2 py-1 text-xs text-sky-200">
        {/* We supply a key/value map of dynamic values we want to replace. */}
        {t("userGreeting", { name: "J" })}
      </p>
      <h1 className="text-xs font-thin">
        Today&apos;s weather
      </h1>
      <h2 className="text-lg">
        {format.dateTime(new Date("2024-04-15T00:00:00Z"), {
          dateStyle: "full",
        })}
      </h2>

      <section>
        <div className="flex items-baseline gap-3">
          <p className="relative top-4 text-8xl">☀️</p>
          <p className="text-6xl font-light">Sunny</p>
          <p className="text-6xl font-thin">
            {format.number(22, { style: "unit", unit: "celsius", })}
          </p>
        </div>
      </section>

      <ServerWeatherAlerts />
    </main>
  );
}