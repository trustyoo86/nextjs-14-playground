export default function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string; }; }) {
  console.log('locale', locale);

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}