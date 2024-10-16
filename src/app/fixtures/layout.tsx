import { Footer } from "@/components/site/footer";
import { PagesHeader } from "@/components/pages-header/pages-header";

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
