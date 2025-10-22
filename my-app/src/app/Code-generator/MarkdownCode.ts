import { Code, CodeData } from '../types/code';

export class MarkdownCode implements Code {
  constructor(private data: CodeData) {}

  render(): string {
    const { "Title 1": title1, "Title 2": title2, "Title 3": title3, paragraph, quote } = this.data;

    let markdown = '';
    
    if (title1) markdown += `# ${title1}\n\n`;
    if (title2) markdown += `## ${title2}\n\n`;
    if (title3) markdown += `### ${title3}\n\n`;
    if (paragraph) markdown += `${paragraph}\n\n`;
    if (quote) markdown += `> ${quote}\n`;

    return markdown.trim();
  }
}
