import * as styled from "./styles";
import { Item } from "../../types/Item";
import React, { useState } from "react";
import { categories } from "../../data/categories";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories); //armazena só as chaves de categories

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    } /*getTime retorna os milissegundos passados entre 1 de Janeiro de 1970 00:00:00 UTC e a data atual.
    Se o retorno não for um número é pq a data selecionada é inválida.*/

    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    } //verifica se em categoryKeys existe a chave selecionada que esta armazenada no categoryField

    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n")); //monta uma string com os erros dando quebra de linha entre eles.
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <styled.Container>
      <styled.Div>
        <styled.P>Data</styled.P>
        <styled.Input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </styled.Div>
      <styled.Div>
        <styled.P>Categoria</styled.P>
        <styled.Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </styled.Select>
      </styled.Div>
      <styled.Div>
        <styled.P>Título</styled.P>
        <styled.Input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </styled.Div>
      <styled.Div>
        <styled.P>Valor</styled.P>
        <styled.Input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </styled.Div>
      <styled.DivButton>
        <styled.Button onClick={handleAddEvent}>Adicionar</styled.Button>
      </styled.DivButton>
    </styled.Container>
  );
};
