import {Head} from "@inertiajs/react";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

export default function AppHead ({title}) {
    const baseTitle = 'SmartBudget';
    const {t} = useTranslation();

    return (
        <Head>
            <title>{title ? `${baseTitle} | ${t(`titles.${title}`)}` : baseTitle}</title>
        </Head>
    );
}
