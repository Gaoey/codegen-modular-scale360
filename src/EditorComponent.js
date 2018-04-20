import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';

export const EditorComponent = (codeString) => {
    return <SyntaxHighlighter language='javascript' style={dark}>{codeString}</SyntaxHighlighter>;
}