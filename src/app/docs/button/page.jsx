"use client";
import { Button, CodeBlock } from "@/components/index";

const PageButton = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Tailwind CSS Button - React</h2>
      <p className="text-gray-700 mb-4">
        Our <span className="font-semibold text-blue-600">Button</span> component, built with Tailwind CSS, is ideal for actions in forms, dialogues, and more.
      </p>

      <p className="text-gray-700 mb-4">
        Buttons are crucial in web design, acting as styled links that attract user attention. They help guide users to take actions like submitting forms or placing orders.
      </p>

      <p className="text-gray-700 mb-4">
        Below is an example of our <span className="font-semibold text-blue-600">Button</span> component, demonstrating various styles and colors that can be easily integrated into your Tailwind CSS and React projects.
      </p>

      <CodeBlock language="jsx" preview={true}>
        <Button>Click Me</Button>
      </CodeBlock>

      <h3 className="text-xl font-semibold mt-5">Button Sizes</h3>
      <p className="text-gray-700 mb-4">
        The Button component supports three sizes: small, medium, and large. You can easily adjust the size using the <code>size</code> prop.
      </p>

      <CodeBlock language="jsx" preview={true}>
        <Button color="red" size="sm">Small Button</Button>
        <Button color="blue" size="md">Medium Button</Button>
        <Button color="green" size="lg">Large Button</Button>
      </CodeBlock>
    </div>
  );
};

export default PageButton;
