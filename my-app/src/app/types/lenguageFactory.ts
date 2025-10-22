import { Code, CodeData } from "./code";

export interface LanguageFactory {
  createCode(data: CodeData): Code;
}
