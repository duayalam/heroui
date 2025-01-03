"use client";
import { Button, CodeBlock } from "@/components/index";
const PageButton = () => {
  const Code = () => {
    <Button>Botón</Button>;
  };
  const sizes = `<Button color="white" size={"sm"}>
        Botón
      </Button>
      <Button color="blue" size={"md"}>
        Botón
      </Button>
      <Button color="white" size={"lg"}>
        Botón
      </Button>`;
  return (
    <div className="p-5">
      <b className="text-[20px]">Tailwind CSS Button - React</b>
      <p class="text-gray-700 mb-4">
        Use our <span class="font-semibold text-blue-600">Button</span> based on
        Tailwind CSS for actions in forms, dialogues, and more.
      </p>

      <p class="text-gray-700 mb-4">
        Button is an essential element of web design. Basically, Button is
        styled links that grab the user's attention. They help users navigate
        our websites or apps and drive them to a particular action like
        submitting a contact form or placing an order as easy as possible.
      </p>

      <p class="text-gray-700 mb-4">
        See below our <span class="font-semibold text-blue-600">Button</span>{" "}
        example that you can use in your Tailwind CSS and React project. The
        example also comes in different styles and colors, so you can adapt it
        easily to your needs.
      </p>

      <CodeBlock language="jsx" preview={true}><Code/></CodeBlock>
      <br />

      <b className="text-[20px] mt-5">Button Sizes</b>
      <p class="text-gray-700 mb-4">
        The Button component offers three different sizes, which can be adjusted
        using the size prop.
      </p>
      {/* <CodeBlock code={sizes} language="jsx" preview={true} /> */}
    </div>
  );
};
export default PageButton;
