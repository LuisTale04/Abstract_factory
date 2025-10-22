export interface Code {
  render(): string;
}
export interface CodeData {
     "Title 1": string;
  "Title 2": string;
  "Title 3": string;
  paragraph: string;
  quote: string;
}

export interface JsonInput{
    data: CodeData;
}
