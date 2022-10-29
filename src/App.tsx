import { useEffect, useState } from "react";
import * as styled from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, FilterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea/index";

const App = () => {
  const [list, setList] = useState(items); //lista completa com entradas e saidas
  const [filteredList, setFilteredList] = useState<Item[]>([]); //lista de entradas/saidas do mes atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); //mes atual (que esta sendo exibido)

  useEffect(() => {
    setFilteredList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  /*Se a lista mudar (inserindo um gasto ou entrada), ou o mês atual mudar, preciso atualizar os dados da 
  lista filtrada que está sendo exibida. A função FilterLisByMonth faz essa filtragem e coloca na state 
  filteredList. Como está no useEffect, sempre que for adidionado um gasto ou entrada na lista ou sempre 
  que eu mudar o mês atual, a função FilterListByMonth será executada automaticamente. */

  return (
    <styled.Container>
      <styled.Header>
        <styled.HeaderText>Sistema Financeiro</styled.HeaderText>
      </styled.Header>
      <styled.Body>
        {/*area de informações*/}
        {/*area de inserção*/}
        {/*tabela de itens */}
        <TableArea></TableArea>
      </styled.Body>
    </styled.Container>
  );
};

export default App;
