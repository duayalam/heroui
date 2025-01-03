"use client";
import { Modal, ModalTitle, ModalFooter, Button, CodeBlock } from "@/components/index";
import { useState } from "react";

const PageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-5">
      <b className="text-[20px]">Modal Component - Tailwind CSS with React</b>
      <p className="text-gray-700 mb-4">
        Use our <span className="font-semibold text-blue-600">Modal</span> component based on Tailwind CSS for displaying content in a popup overlay, often used for user interaction or important information.
      </p>

      <p className="text-gray-700 mb-4">
        Modals are a great way to present content without leaving the current page, allowing users to interact with essential actions like form submissions, confirmations, or notifications. This component is built with Tailwind CSS and can be easily customized and controlled in React projects.
      </p>

      <p className="text-gray-700 mb-4">
        Below is an example of the <span className="font-semibold text-blue-600">Modal</span> component in action. You can open and close the modal by controlling the <code className="font-bold">isOpen</code> state.
      </p>

      {/* <CodeBlock language="jsx" preview={true}>
        {`
import React, { useState } from 'react';
import { Modal, ModalTitle, ModalFooter, Button } from "@/components/index";

const Example = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalTitle>Modal Title</ModalTitle>
        <p>This is the content inside the modal.</p>
        <ModalFooter>
          <Button onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
        `}
      </CodeBlock> */}

      <b className="text-[20px] mt-5">Modal Structure</b>
      <p className="text-gray-700 mb-4">
        The <span className="font-semibold text-blue-600">Modal</span> component is structured with a title section, content, and a footer. You can use the <code className="font-bold">ModalTitle</code> and <code className="font-bold">ModalFooter</code> subcomponents to organize the modal's content.
      </p>

      {/* <CodeBlock language="jsx" preview={true}>
        {`
<Modal isOpen={isModalOpen} onClose={closeModal}>
  <ModalTitle>Modal Title</ModalTitle>
  <p>This is some content inside the modal.</p>
  <ModalFooter>
    <Button onClick={closeModal}>Close</Button>
  </ModalFooter>
</Modal>
        `}
      </CodeBlock> */}

      <b className="text-[20px] mt-5">Controlling Modal Visibility</b>
      <p className="text-gray-700 mb-4">
        The <span className="font-semibold text-blue-600">Modal</span> component allows you to control its visibility by passing the <code className="font-bold">isOpen</code> prop, and you can trigger the modal to close by calling the <code className="font-bold">onClose</code> callback.
      </p>

      {/* <CodeBlock language="jsx" preview={true}>
        {`
const [isModalOpen, setIsModalOpen] = useState(false);
const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);
        `}
      </CodeBlock> */}

      <b className="text-[20px] mt-5">Modal Animations</b>
      <p className="text-gray-700 mb-4">
        The <span className="font-semibold text-blue-600">Modal</span> component comes with smooth opening and closing animations, triggered based on the <code className="font-bold">isOpen</code> prop.
      </p>

      {/* <CodeBlock language="jsx" preview={true}>
        {`
<Modal isOpen={true} onClose={closeModal}>
  <ModalTitle>Modal with Animation</ModalTitle>
  <p>This modal has smooth animations when opening and closing.</p>
  <ModalFooter>
    <Button onClick={closeModal}>Close</Button>
  </ModalFooter>
</Modal>
        `}
      </CodeBlock> */}

      <b className="text-[20px] mt-5">Modal with Close Button</b>
      <p className="text-gray-700 mb-4">
        You can include a close button in the modal footer, which triggers the <code className="font-bold">onClose</code> function to close the modal when clicked.
      </p>

      {/* <CodeBlock language="jsx" preview={true}>
        {`
<Modal isOpen={true} onClose={closeModal}>
  <ModalTitle>Modal with Close Button</ModalTitle>
  <p>Click the button below to close this modal.</p>
  <ModalFooter>
    <Button onClick={closeModal}>Close</Button>
  </ModalFooter>
</Modal>
        `}
      </CodeBlock> */}
    </div>
  );
};

export default PageModal;
