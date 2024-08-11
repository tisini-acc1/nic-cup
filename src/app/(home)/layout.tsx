import { Footer } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <SiteHeader />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
