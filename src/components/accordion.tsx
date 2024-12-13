"use client";

import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex-1 lg:p-5">
      {faqs.map((question) => (
        <Accord
          section={question}
          key={question.id}
          isActiveSection={question.id === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={question.id}
        />
      ))}
    </div>
  );
};

export default Accordion;

type SectionType = {
  id: number;
  question: string;
  answer: string;
};

type AccordionProps = {
  section: SectionType;
  isActiveSection: boolean;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  sectionIndex: number;
};

const Accord = (props: AccordionProps) => {
  const { section, isActiveSection, setActiveIndex, sectionIndex } = props;

  const toggleSection = () => {
    const nextIndex = isActiveSection ? 0 : sectionIndex;
    setActiveIndex(nextIndex);
  };
  // console.log(props);
  return (
    <div>
      <div
        className="flex items-center justify-between border-2 rounded-md p-3 my-2 cursor-pointer"
        onClick={toggleSection}
      >
        <h2 className="text-xl font-semibold">{section.question}</h2>

        {isActiveSection ? "+" : "-"}
        {/* {isActiveSection ? <FaMinus /> : <FaPlus />} */}
      </div>

      <div className="px-5 text-[#71717a]">
        {isActiveSection && section.id === 3 ? (
          <Table />
        ) : (
          isActiveSection && <p>{section.answer}</p>
        )}
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Category
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Gender
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Field
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-200`}
            >
              <td className="px-6 py-3 text-sm text-gray-700">{item.cat}</td>
              <td className="px-6 py-3 text-sm text-gray-700">{item.gen}</td>
              <td className="px-6 py-3 text-sm text-gray-700">{item.field}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const data = [
  { cat: "Under 5", gen: "Mixed", field: "4v4" },
  { cat: "Under 7", gen: "Mixed", field: "5v5" },
  { cat: "Under 9", gen: "Mixed", field: "6v6" },
  { cat: "Under 11", gen: "Mixed", field: "7v7" },
  { cat: "Under 13", gen: "Boys", field: "11v11" },
  { cat: "Under 13", gen: "Boys", field: "9v9" },
  { cat: "Under 13", gen: "Girls", field: "9v9" },
  { cat: "Under 15", gen: "Boys", field: "11v11" },
  { cat: "Under 15", gen: "Girls", field: "11v11" },
  { cat: "Under 17", gen: "Boys", field: "11v11" },
  { cat: "Under 17", gen: "Girls", field: "11v11" },
  { cat: "Under 20", gen: "Boys", field: "11v11" },
];

const faqs = [
  {
    id: 1,
    question: "What are the dates of the tournament?",
    answer: "August, 2025",
  },
  {
    id: 2,
    question: "Where will Nairobi International Cup take place?",
    answer: "Lenana School. Nairobi County, Kenya.",
  },
  {
    id: 3,
    question: "What are the age categories?",
    answer: `Boys: u5, u7, u9, u11, u13, u15, u17, u20. \nGirls: u13, u15, u17.`,
  },
  {
    id: 4,
    question: "How many people will be involved?",
    answer:
      "The Event will feature over 300 teams making it over 12000 kids and youth coming together for a common goal - to enjoy and celebrate a game we all love. A game that has given us so much. This will also provide a perfect platform to open up our city and showcase its warmth, vibrancy to all our guests.",
  },
  {
    id: 5,
    question: "Will there be media coverage?",
    answer:
      "Yes, local and national newspapers, television stations, and radio stations will be present.",
  },
  {
    id: 6,
    question: "What about international coverage?",
    answer:
      "Through our social media platforms, international audience will be able to follow all the action live.",
  },
];
