import { Client } from './sevices/Client';
import { HTMLFactory } from './factories/HTMLFactory';
import { MarkdownFactory } from './factories/MarkdownFactory';
import { JsonInput } from './types/code';

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

// Crear interfaz para leer desde consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//  Preguntar ruta del archivo JSON
rl.question(' Ingresa la ruta del archivo JSON: ', (filePathInput: string) => {
  const filePath = path.resolve(filePathInput);

  if (!fs.existsSync(filePath)) {
    console.error('Archivo no encontrado. Verifica la ruta.');
    rl.close();
    return;
  }

  let jsonInput: JsonInput;
  try {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    jsonInput = JSON.parse(rawData);
  } catch (error) {
    console.error(' Error al leer el archivo JSON:', error);
    rl.close();
    return;
  }

  console.log('\n=== Selecciona un formato ===');
  console.log('1. HTML');
  console.log('2. Markdown');

  rl.question(' Selecciona 1 o 2: ', (option: string) => {
    let factory;

    if (option === '1') {
      console.log('\n Generando en HTML...');
      factory = new HTMLFactory();
    } else if (option === '2') {
      console.log('\n Generando en Markdown...');
      factory = new MarkdownFactory();
    } else {
      console.error(' Opción inválida.');
      rl.close();
      return;
    }

    const client = new Client(factory);
    const result = client.getFormat(jsonInput.data);

    console.log('\n=== RESULTADO FINAL ===\n');
    console.log(result);

    rl.close();
  });
});
