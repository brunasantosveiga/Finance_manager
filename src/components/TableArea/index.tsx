import * as styled from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";

type Props = {
  list: Item[];
};
export const TableArea = ({ list }: Props) => {
  return (
    <styled.Table>
      <thead>
        <tr>
          <styled.TableHeadColumn width={100}>Data</styled.TableHeadColumn>
          <styled.TableHeadColumn width={130}>Categoria</styled.TableHeadColumn>
          <styled.TableHeadColumn>Título</styled.TableHeadColumn>
          <styled.TableHeadColumn width={150}>Valor</styled.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
      {/*sempre que recebemos uma prop em um componente temos que criar um type para essa prop.
      list é a filteredList App.tsx */}
    </styled.Table>
  );
};
