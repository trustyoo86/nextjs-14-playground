import { useTranslations } from "next-intl";

function TestPage() {
  const t = useTranslations('Index');

  return (
    <div>{t('title')}</div>
  );
}

export default TestPage;
