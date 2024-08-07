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
        {isActiveSection && <p>{section.answer}</p>}
      </div>
    </div>
  );
};

const faqs = [
  {
    id: 1,
    question: "What are the dates of the tournament?",
    answer: "Thursday 15th August – Sunday 18th of August, 2024",
  },
  {
    id: 2,
    question: "Where will Nairobi International Cup take place?",
    answer: "Lenana School and St. Mary’s School, in Nairobi County, Kenya.",
  },
  {
    id: 3,
    question: "What are the age categories?",
    answer: `Boys: U7, U9, U11, U13, U15, U17 and U20. \nGirls: U15, U17 and U20.`,
  },
  {
    id: 4,
    question: "How many people will be involved?",
    answer:
      "The Event will feature over 300 teams making it over 8000 kids and youth coming together for a common goal - to enjoy and celebrate a game we all love. A game that has given us so much. This will also provide a perfect platform to open up our city and showcase its warmth, vibrancy to all our guests.",
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
