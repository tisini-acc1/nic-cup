import { PagesHeader } from "@/components/pages-header/pages-header";
import { Footer } from "@/components/site/footer";

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
