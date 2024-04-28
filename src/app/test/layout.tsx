export default function TestLayout({ modal, full, children }: {
  children: React.ReactNode;
  modal: React.ReactNode;
  full: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {modal}
      {full}
    </div>
  );
}