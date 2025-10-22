import { Code, CodeData } from '../types/code';

export class HTMLCode implements Code {
  constructor(private data: CodeData) {}

  render(): string {
    let html = '<div class="document">\n';

    for (const key in this.data) {
      const value = this.data[key];

      if (key.startsWith('Title')) {
        // Títulos: h1, h2, h3, ... según número
        const level = Math.min(parseInt(key.split(' ')[1]), 6); // máximo h6
        html += `  <h${level}>${value}</h${level}>\n`;
      } else if (key.startsWith('paragraph')) {
        html += `  <p>${value}</p>\n`;
      } else if (key.startsWith('quote')) {
        html += `  <blockquote>${value}</blockquote>\n`;
      } else if (Array.isArray(value)) {
        // Listas
        html += '  <ul>\n';
        for (const item of value) {
          html += `    <li>${item}</li>\n`;
        }
        html += '  </ul>\n';
      } else {
        // Otros datos como fallback
        html += `  <p>${value}</p>\n`;
      }
    }

    html += '</div>';
    return html;
  }
}
