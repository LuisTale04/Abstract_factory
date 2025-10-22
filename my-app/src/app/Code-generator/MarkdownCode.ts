import { Code, CodeData } from '../types/code';

export class MarkdownCode implements Code {
  constructor(private data: CodeData) {}

  render(): string {
    let markdown = '';

    for (const key in this.data) {
      const value = this.data[key];

      if (key.startsWith('Title')) {
        // Títulos: #, ##, ### ... según número
        const level = Math.min(parseInt(key.split(' ')[1]), 6); // máximo h6
        markdown += `${'#'.repeat(level)} ${value}\n\n`;
      } else if (key.startsWith('paragraph')) {
        markdown += `${value}\n\n`;
      } else if (key.startsWith('quote')) {
        markdown += `> ${value}\n\n`;
      } else if (Array.isArray(value)) {
        // Listas
        for (const item of value) {
          markdown += `- ${item}\n`;
        }
        markdown += '\n';
      } else {
        // Otros datos como fallback
        markdown += `${value}\n\n`;
      }
    }

    return markdown.trim();
  }
}
