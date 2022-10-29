import * as styled from "./styles";

export const TableArea = () => {
  return (
    <styled.Table>
      <thead>
        <tr>
          <styled.TableHeadColumn>Data</styled.TableHeadColumn>
          <styled.TableHeadColumn>Categoria</styled.TableHeadColumn>
          <styled.TableHeadColumn>Título</styled.TableHeadColumn>
          <styled.TableHeadColumn>Valor</styled.TableHeadColumn>
        </tr>
      </thead>
      <tbody></tbody>
    </styled.Table>
  );
};
