import Breadcrumbs from "../../components/Breadcrumbs";

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <Breadcrumbs />
      <div>{children}</div>
    </div>
  );
}
