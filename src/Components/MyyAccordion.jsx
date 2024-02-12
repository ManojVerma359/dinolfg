import React from "react";
import accordion_img from "../assets/images/myaccordion_img.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      className={`${
        id === open ? "rotate-180" : ""
      } h-6 w-6  transition-transform`}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="18"
        cy="18"
        r="18"
        transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 36 36)"
        fill="white"
      />
      <path
        d="M12.2857 14L18 19.625L23.7143 14L26 15.125L18 23L10 15.125L12.2857 14Z"
        fill="#0A4740"
      />
    </svg>
  );
}

export function MyyAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div id="Faq" className="relative overflow-hidden">
        <img
          className="absolute w-full top-[-22px]"
          src={accordion_img}
          alt=""
        />

        <div className="container mx-auto px-3 max-w-[827px] pt-[45px] sm:pt-[80px] md:pt-[160px] lg:pt-[250px] xl:pt-[214px] 2xl:pt-[400px]">
          <p className="text-[64px] ff_chewy text-white text-center md:pb-[60px] sm:pb-[45px] pb-[25px]">
            FAQs
          </p>
          <div className="gap-[20px] flex flex-col">
            <Accordion
              className="border !bg-[#09655a]  border-[white] py-[16px] sm:py-[24.5px] px-[16px] sm:px-[30px] rounded-[40px] text-[12px] sm:text-[16px] ff_chewy text-white"
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader
                className="sm:text-[20px] bg-[#9655a] text-[14px] text-start ff_balsmiq items-start"
                onClick={() => handleOpen(1)}
              >
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="border border-[white] !bg-[#09655a]  py-[16px] sm:py-[24.5px] px-[16px] sm:px-[30px] rounded-[40px] text-[12px] sm:text-[16px] ff_chewy text-white"
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader
                className="sm:text-[20px] text-[14px] text-start ff_balsmiq items-start"
                onClick={() => handleOpen(2)}
              >
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="border !bg-[#09655a]  border-[white] py-[16px] sm:py-[24.5px] px-[16px] sm:px-[30px] rounded-[40px] text-[12px] sm:text-[16px] ff_chewy text-white"
              open={open === 3}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader
                className="sm:text-[20px] text-[14px] text-start ff_balsmiq items-start"
                onClick={() => handleOpen(3)}
              >
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="border !bg-[#09655a] border-[white] py-[16px] sm:py-[24.5px] px-[16px] sm:px-[30px] rounded-[40px] text-[12px] sm:text-[16px] ff_chewy text-white"
              open={open === 4}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader
                className="sm:text-[20px] text-[14px] text-start ff_balsmiq items-start"
                onClick={() => handleOpen(4)}
              >
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              className="border !bg-[#09655a]  border-[white] py-[16px] sm:py-[24.5px] px-[16px] sm:px-[30px] rounded-[40px] text-[12px] sm:text-[16px] ff_chewy text-white"
              open={open === 5}
              icon={<Icon id={5} open={open} />}
            >
              <AccordionHeader
                className="sm:text-[20px] text-[14px] text-start ff_balsmiq items-start"
                onClick={() => handleOpen(5)}
              >
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyyAccordion;
