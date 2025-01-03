"use client";
import { Alert, CodeBlock, Card, CardHeader, CardBody, CardFooter, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody } from "@/components/index";

const PageAlert = () => {
  return (
    <div className="p-5">
      <b className="text-[20px]">Alert Component - Tailwind CSS with React</b>
      <p className="text-gray-700 mb-4">
        Use our <span className="font-semibold text-blue-600">Alert</span> component based on Tailwind CSS for displaying important messages or notifications to your users.
      </p>

      <p className="text-gray-700 mb-4">
        Alerts are a great way to inform users about key information such as errors, successes, warnings, or general information. This component is built with Tailwind CSS and can be easily customized and controlled in React projects.
      </p>

      <p className="text-gray-700 mb-4">
        Below is an example of the <span className="font-semibold text-blue-600">Alert</span> component in action. It comes with different colors and animations, and you can also control whether the alert is visible or hidden.
      </p>

      <CodeBlock language="jsx" preview={true}>
        <Alert type="green" isOpen={true} showCloseButton={true}>
          This is a success alert!
        </Alert>
      </CodeBlock>
      <br />

      <b className="text-[20px] mt-5">Alert Types</b>
      <p className="text-gray-700 mb-4">
        The <span className="font-semibold text-blue-600">Alert</span> component supports multiple color types for different purposes, such as success, error, info, and warnings.
      </p>
      <CodeBlock language="jsx" preview={true}>
        <Alert type="red" isOpen={true} showCloseButton={true}>
          This is an error alert!
        </Alert>
        <Alert type="yellow" isOpen={true} showCloseButton={true}>
          This is a warning alert!
        </Alert>
        <Alert type="blue" isOpen={true} showCloseButton={true}>
          This is an info alert!
        </Alert>
      </CodeBlock>

      <b className="text-[20px] mt-5">Customizing Alerts</b>
      <p className="text-gray-700 mb-4">
        You can easily customize the <span className="font-semibold text-blue-600">Alert</span> component with Tailwind's utility classes by passing additional classes via the <code className="font-bold">className</code> prop.
      </p>

      <CodeBlock language="jsx" preview={true}>
        <Alert type="green" isOpen={true} className="p-6 rounded-lg shadow-lg">
          This is a customized success alert!
        </Alert>
      </CodeBlock>

      <b className="text-[20px] mt-5">Controlling Alert Visibility</b>
      <p className="text-gray-700 mb-4">
        The <span className="font-semibold text-blue-600">Alert</span> component allows you to control the visibility by passing the <code className="font-bold">isOpen</code> prop. You can also trigger the close action with the <code className="font-bold">showCloseButton</code> prop.
      </p>

      <CodeBlock language="jsx" preview={true}>
        <Alert type="blue" isOpen={false} showCloseButton={true}>
          This alert is hidden because <code>isOpen</code> is set to <code>false</code>.
        </Alert>
      </CodeBlock>

      <b className="text-[20px] mt-5">Alert with Close Button</b>
      <p className="text-gray-700 mb-4">
        The <span className="font-semibold text-blue-600">Alert</span> component can include a close button to hide the alert when clicked.
      </p>

      <CodeBlock language="jsx" preview={true}>
        <Alert type="green" isOpen={true} showCloseButton={true}>
          Click the "X" to close this alert.
        </Alert>
      </CodeBlock>

      <b className="text-[20px] mt-5">Alert Animations</b>
      <p className="text-gray-700 mb-4">
        The <span className="font-semibold text-blue-600">Alert</span> component comes with smooth opening and closing animations, which are triggered based on the visibility state.
      </p>

      <CodeBlock language="jsx" preview={true}>
        <Alert type="purple" isOpen={true} showCloseButton={true}>
          This alert has animations on open and close.
        </Alert>
      </CodeBlock>
    </div>
  );
};

export default PageAlert;
