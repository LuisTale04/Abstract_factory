import { Client } from './sevices/Client';
import { HTMLFactory } from './factories/HTMLFactory';
import { MarkdownFactory } from './factories/MarkdownFactory';


function processJson(jsonData: any, format: 'html' | 'markdown' = 'html'): string {
  const factory = format === 'html' ? new HTMLFactory() : new MarkdownFactory();
  const client = new Client(factory);
  
  return client.getFormat(jsonData.data);
}

// Ejemplo de uso
const exampleJson = {
  data: {
    "Title 1": "Documento de Ejemplo",
    "Title 2": "Características Principales",
    "Title 3": "Detalles de Implementación",
    paragraph: "Este documento demuestra la implementación del patrón Factory para convertir JSON a diferentes formatos de marcado.",
    quote: "La simplicidad es la máxima sofisticación - Leonardo da Vinci"
  }
};

console.log('PROCESANDO EJEMPLO:');
console.log('HTML:', processJson(exampleJson, 'html'));
console.log('MARKDOWN:', processJson(exampleJson, 'markdown'));
