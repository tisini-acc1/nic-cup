import { Footer } from "@/components/site/footer";
import { PagesHeader } from "@/components/headers/pages-header";

const FixturesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <PagesHeader />
      {children}
      <Footer />
    </div>
  );
};

export default FixturesLayout;
