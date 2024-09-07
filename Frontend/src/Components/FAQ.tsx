import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does the AI-powered career counseling work?",
    answer: "Our AI analyzes your skills, interests, and goals to provide personalized career guidance and recommendations.",
    value: "item-1",
  },
  {
    question: "Can I connect with mentors through the platform?",
    answer:
      "Yes, you can connect with experienced mentors who will offer one-on-one guidance to help you navigate your career path.",
    value: "item-2",
  },
  {
    question: "Is the career counseling service free?",
    answer:
      "We offer both free and premium plans, allowing you to choose the best option that suits your needs and goals.",
    value: "item-3",
  },
  {
    question: "How do I track my skill development progress?",
    answer: "Our platform provides detailed tracking of your learning progress and offers resources to improve your skills.",
    value: "item-4",
  },
  {
    question: "Can I get recommendations for courses and certifications?",
    answer:
      "Yes, based on your profile, our AI suggests the most relevant courses and certifications to boost your career.",
    value: "item-5",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
