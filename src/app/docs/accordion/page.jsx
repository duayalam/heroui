"use client";
import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody, CodeBlock, Typography } from "@/components/index";

const PageAccordion = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (section) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="p-5">
      <Typography variant="h2" className="text-2xl font-bold">
        Accordion Component - Tailwind CSS with React
      </Typography>
      <p className="text-gray-700 mb-4">
        The <span className="font-semibold text-blue-600">Accordion</span> component allows you to display sections of content that can be toggled open and closed. This is ideal for displaying large amounts of content or categorizing information in a compact form.
      </p>

      <p className="text-gray-700 mb-4">
        Below is an example of the <span className="font-semibold text-blue-600">Accordion</span> component in action, where you can toggle the visibility of each section.
      </p>

     

      <b className="text-[20px] mt-5">Accordion Example</b>
      <p className="text-gray-700 mb-4">
        Here is a live example of the <span className="font-semibold text-blue-600">Accordion</span> component where each section can be opened and closed individually.
      </p>

      <Accordion>
        <AccordionHeader isOpen={openSections.includes(1)} onClick={() => toggleSection(1)}>
          Section 1
        </AccordionHeader>
        <AccordionBody isOpen={openSections.includes(1)}>
          This is the content of section 1.
        </AccordionBody>

        <AccordionHeader isOpen={openSections.includes(2)} onClick={() => toggleSection(2)}>
          Section 2
        </AccordionHeader>
        <AccordionBody isOpen={openSections.includes(2)}>
          This is the content of section 2.
        </AccordionBody>

        <AccordionHeader isOpen={openSections.includes(3)} onClick={() => toggleSection(3)}>
          Section 3
        </AccordionHeader>
        <AccordionBody isOpen={openSections.includes(3)}>
          This is the content of section 3.
        </AccordionBody>
      </Accordion>

      <b className="text-[20px] mt-5">Customizing Accordions</b>
      <p className="text-gray-700 mb-4">
        You can customize the <span className="font-semibold text-blue-600">Accordion</span> component with Tailwind CSS utility classes to change its appearance.
      </p>

     

      <b className="text-[20px] mt-5">Accordion with Multiple Sections Open</b>
      <p className="text-gray-700 mb-4">
        You can allow multiple sections to be open at the same time by adjusting the component's logic. Here is how you can modify the code to handle this:
      </p>

     
    </div>
  );
};

export default PageAccordion;
