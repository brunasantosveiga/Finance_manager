export type Category = {
  [tag: string]: {
    title: string;
    color: string;
    expense: boolean;
  };
};
// [tag: string] significa que posso ter qualquer string como chave desse objeto
