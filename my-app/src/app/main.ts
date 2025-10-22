import { Client } from './sevices/Client';
import { HTMLFactory } from './factories/HTMLFactory';
import { MarkdownFactory } from './factories/MarkdownFactory';
import { JsonInput } from './types/code';


const jsonInput: JsonInput = {
  data: {
    "Title 1": "Mi Título Principal",
    "Title 2": "Subtítulo Importante",
    "Title 3": "Sección Detallada",
    paragraph: "Este es un párrafo de ejemplo que demuestra cómo se formatea el contenido en diferentes lenguajes de marcado.",
    quote: "Esta es una cita inspiradora que se mostrará de manera destacada en el resultado final."
  }
};

// HTML
console.log('=== FORMATO HTML ===');
const htmlFactory = new HTMLFactory();
const htmlClient = new Client(htmlFactory);
const htmlResult = htmlClient.getFormat(jsonInput.data);
console.log(htmlResult);

console.log('\n=== FORMATO MARKDOWN ===');
const markdownFactory = new MarkdownFactory();
const markdownClient = new Client(markdownFactory);
const markdownResult = markdownClient.getFormat(jsonInput.data);
console.log(markdownResult);

// Markdown
console.log('\n=== USANDO MISMO CLIENTE ===');
const client = new Client(new HTMLFactory());
console.log('Inicialmente HTML:');
console.log(client.getFormat(jsonInput.data));

client.setFactory(new MarkdownFactory());
console.log('\nCambiado a Markdown:');
console.log(client.getFormat(jsonInput.data));
