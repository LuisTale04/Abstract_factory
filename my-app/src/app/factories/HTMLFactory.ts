import { LanguageFactory } from '../types/lenguageFactory';
import { CodeData } from '../types/code';
import { Code } from '../types/code';
import { HTMLCode } from '../Code-generator/HTMLCode';

export class HTMLFactory implements LanguageFactory {
  createCode(data: CodeData): Code {
    return new HTMLCode(data);
  }
}
