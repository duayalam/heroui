# HeroUI Tailwind: Component Library Usage Guide

This document provides a practical guide to using HeroUI Tailwind components with concrete examples.

## Installation

1.  **Install the package:**

    ```bash
    npm install heroui-tailwind
    ```

## Configuration

1.  **Update Tailwind CSS configuration (`tailwind.config.js`):**

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/heroui-tailwind/**/*.{js,jsx,ts,tsx}", // Important!
      ],
      theme: {
        extend: {
          colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
          },
        },
      },
      plugins: [],
    };
    ```

## Usage Examples

This section demonstrates the usage of various HeroUI Tailwind components within a functional React component.

```jsx
"use client";
import {
  Button,
  Input,
  Alert,
  Modal,
  ModalTitle,
  ModalFooter,
  Progress,
  Select,
} from "@/components/index"; // Adjust path as needed
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "elderberry", label: "Elderberry" },
  ];

  return (
    <div className="p-5"> {/* Added padding for better visualization */}
      <h2>Alerts</h2>
      <Alert type="dark" isOpen showCloseButton> {/* Simplified props */}
        Dark Alert
      </Alert>
      <Alert type="red" isOpen showCloseButton>
        Red Alert
      </Alert>
      <Alert type="blue" isOpen> {/* No close button */}
        Blue Alert
      </Alert>

      <h2>Buttons</h2>
      <Button color="white" size="sm">
        Small Button
      </Button>
      <Button color="blue" size="md">
        Medium Button
      </Button>
      <Button color="white" size="lg">
        Large Button
      </Button>

      <h2>Inputs</h2>
      <Input color="blue" placeholder="Blue Input" />
      <Input color="red" placeholder="Red Input" />
      <Input color="dark" placeholder="Dark Input" label="Name" />
      <Input color="green" placeholder="Green Input" label="Other Name" />

      <h2>Modals</h2>
      <Button color="blue" onClick={openModal}>
        Open Modal
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalTitle>Modal Title</ModalTitle>
        <p>Modal Content</p> {/* Added some content */}
        <ModalFooter>
          <Button onClick={closeModal}>Cancel</Button> {/* Simplified button */}
          <Button color="blue">Accept</Button>
        </ModalFooter>
      </Modal>

      <h2>Progress</h2>
      <Progress value={30} color="dark" label="30% Completed" /> {/* Improved label */}

      <h2>Select</h2>
      <Select options={options} searchable size="sm" placeholder="Search Fruit" />
    </div>
  );
}