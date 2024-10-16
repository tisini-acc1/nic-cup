import { Footer } from "@/components/site/footer";
import FixturesHeader from "@/components/headers/fixtures-header";

const PagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <FixturesHeader />
      {children}
      <Footer />
    </div>
  );
};

export default PagesLayout;
