import * as styled from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <styled.TableLine>
      <styled.TableColumn>{formatDate(item.date)}</styled.TableColumn>
      <styled.TableColumn>
        <styled.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </styled.Category>
      </styled.TableColumn>
      <styled.TableColumn>{item.title}</styled.TableColumn>
      <styled.TableColumn>
        <styled.Value
          color={categories[item.category].expense ? "red" : "green"}
        >
          R$ {item.value}
        </styled.Value>
      </styled.TableColumn>
    </styled.TableLine>
  );
  /*Na TableArea eu dei um map na lista filtrada, e em cada elemento dessa lista eu chamo o TableItem
    passando o cada elemento da lista como prop*/
};
