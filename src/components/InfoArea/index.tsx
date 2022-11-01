import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";
import * as styled from "./styles";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    //Coloquei dia 1 pq é necessário para criar uma data JS, mas esa informação não será usada aqui
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(
      `${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`
    ); //passando a nova data para o currentMonth do App.tsx
  };
  /*Para voltar o mês eu peguei a data atual que esta na state currentMonth, criei uma Data JS e salvei em 
  currentDate. Com isso, posso usar a função setMonth com o mês atual menos 1, que ele me da o mês anterior 
  automaticamente sem eu precisar me preocupar se for janeiro. Após ter a data em currentDate preciso passar
  ela para o App.tsx, pois o currentMonth foi declarado lá. Daí criei uma função lá e passei pra cá como 
  prop. Ao mudar o currentMonth a tela é remontada automaticamente pq o currentMonth está no useEffect.*/

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(
      `${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`
    );
  };

  return (
    <styled.Container>
      <styled.MonthArea>
        <styled.MonthArrow onClick={handlePrevMonth}>⬅️</styled.MonthArrow>
        <styled.MonthTitle>
          {formatCurrentMonth(currentMonth)}
        </styled.MonthTitle>
        <styled.MonthArrow onClick={handleNextMonth}>➡️</styled.MonthArrow>
      </styled.MonthArea>
      <styled.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          color={income - expense < 0 ? "red" : "green"}
          title="Balanço"
          value={income - expense}
        />
      </styled.ResumeArea>
    </styled.Container>
  );
};
