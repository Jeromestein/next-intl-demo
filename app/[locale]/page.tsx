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
  return (
    <main>
      <h1 className="text-xs font-thin">
        Today&apos;s weather
      </h1>
      <h2 className="text-lg">Monday April 15 2024</h2>

      <section>
        <div className="flex items-baseline gap-3">
          <p className="relative top-4 text-8xl">☀️</p>
          <p className="text-6xl font-light">Sunny</p>
          <p className="text-6xl font-thin">22°C</p>
        </div>
      </section>

      <ServerWeatherAlerts />
    </main>
  );
}