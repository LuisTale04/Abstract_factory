import { LanguageFactory } from '../types/lenguageFactory';
import { CodeData } from '../types/code';

export class Client {
  constructor(private factory: LanguageFactory) {}

  getFormat(data: CodeData): string {
    const code = this.factory.createCode(data);
    return code.render();
  }

  setFactory(factory: LanguageFactory): void {
    this.factory = factory;
  }
}
