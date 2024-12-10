import Accordion from "@/components/accordion";

export const FaqsSection = () => {
  return (
    <section
      id="faqs"
      className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 bg-gray-50"
    >
      <h2 className="h2 text-center mb-4">FAQS</h2>

      <div className="w-full h-auto flex items-center justify-center gap-x-2 gap-y-5 flex-wrap mb-10">
        <Accordion />
      </div>
    </section>
  );
};
