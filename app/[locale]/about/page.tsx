import { useTranslations } from "next-intl";


export default function About() {
    const t = useTranslations("About");

    return (
        <main>
            <h1 className="text-xs font-thin">{t("title")}</h1>
            <p className="text-lg">
                {t("description")}
            </p>
        </main>
    );
}