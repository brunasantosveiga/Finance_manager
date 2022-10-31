import * as styled from "./styles";

type Props = {
  title: string;
  value: number;
};

export const ResumeItem = ({ title, value }: Props) => {
  return (
    <styled.Container>
      <styled.Title>{title}</styled.Title>
      <styled.Info>R$ {value}</styled.Info>
    </styled.Container>
  );
};
