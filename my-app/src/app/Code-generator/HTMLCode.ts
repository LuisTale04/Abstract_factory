import { Code, CodeData } from '../types/code';

export class HTMLCode implements Code {
  constructor(private data: CodeData) {}

  render(): string {
    const { "Title 1": title1, "Title 2": title2, "Title 3": title3, paragraph, quote } = this.data;

    let html = '<div class="document">\n';
    
    if (title1) html += `  <h1>${title1}</h1>\n`;
    if (title2) html += `  <h2>${title2}</h2>\n`;
    if (title3) html += `  <h3>${title3}</h3>\n`;
    if (paragraph) html += `  <p>${paragraph}</p>\n`;
    if (quote) html += `  <blockquote>${quote}</blockquote>\n`;
    
    html += '</div>';
    return html;
  }
}
