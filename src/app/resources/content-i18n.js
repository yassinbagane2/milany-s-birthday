
const createI18nContent = (t) => {
    const person = {
        location:  'Europe/Bucharest',
        languages: ['English']
    }

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
    }

    const home = {
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }
    return {
        person,
        newsletter,
        home,
    }
};

export { createI18nContent };