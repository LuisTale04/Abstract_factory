import { LanguageFactory } from '../types/lenguageFactory';
import { CodeData } from '../types/code';
import { Code } from '../types/code';
import { MarkdownCode } from '../Code-generator/MarkdownCode';

export class MarkdownFactory implements LanguageFactory {
  createCode(data: CodeData): Code {
    return new MarkdownCode(data);
  }
}