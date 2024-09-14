import { useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import "./FaqItemStyle.css";

const AccordionItem = ({
  handleToggle,
  active,
  faq: { id, header, text },
}: {
  handleToggle: (id: number) => void;
  active: number | null;
  faq: { id: number; header: string; text: string };
}): JSX.Element => {
  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 bg-white ${
            active === id ? "active" : ""
          }`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title ">{header}</h5>
          {active === id ? <FiMinus size={24} color="#ffff" /> : <FaPlus />}
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
