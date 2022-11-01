/* eslint-disable no-console */
/* eslint-disable react/no-children-prop */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MarkdownRender(text) {
  const { children } = text;

  return <ReactMarkdown remarPlugins={[remarkGfm]}>{children}</ReactMarkdown>;
}

export default MarkdownRender;
