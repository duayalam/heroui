import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  solarizedlight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaClipboard, FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../index";


const CodeBlock = ({ children, language, theme = "dracula", preview = false }) => {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(preview);
  const style = theme === "dracula" ? dracula : solarizedlight;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Para demostración, renderizamos el botón directamente
  const previewContent = (
    {children}
  );
  const buttonString = ReactDOMServer.renderToStaticMarkup(children);

  return (
    <div className="bg-gray-900 relative rounded-lg overflow-hidden">
      {showPreview && <div className="text-center bg-white p-4">{previewContent}</div>}
      <div className="flex justify-between items-center p-2 border-b border-gray-700">
        <div className="text-white text-[12px]">{language}</div>
        <div className="flex gap-2">
          <Button
            onClick={() => setShowPreview(!showPreview)}
            size="sm"
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            {showPreview ? (
              <FaEyeSlash className="w-4 h-4" />
            ) : (
              <FaEye className="w-4 h-4" />
            )}
          </Button>
          <Button
            onClick={handleCopy}
            size="sm"
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            <FaClipboard className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <SyntaxHighlighter
        language={language}
        style={style}
        showLineNumbers={true}
        customStyle={{ margin: 0 }}
      >
        {buttonString}
      </SyntaxHighlighter>

      {copied && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs py-1 px-3 rounded">
          Copiado!
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
