import FAQsAccordion from "./FAQsAccordian";

const FAQs = () => {
  return (
    <section
      className="container mx-auto  grid grid-cols-12 bg-no-repeat px-[5%] bg-left pt-40 pb-20 items-center my-10 "
      style={{ backgroundImage: 'url("/images/faqBg.png")' }}
    >
      <aside className="col-span-4 bg-center bg-no-repeat rounded-lg">
        <h1 className="text-right pr-16 text-6xl font-raleway font-semibold">
          Frequently Asked Questions
        </h1>
      </aside>
      <aside className="col-span-8">
        <FAQsAccordion />
      </aside>
    </section>
  );
};

export default FAQs;
