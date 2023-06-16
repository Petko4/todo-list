import { styled } from "styled-components";

interface TaskListProps {
  children?: JSX.Element | JSX.Element[];
}

const Ul = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
`;

export default function TaskList({ children }: TaskListProps): JSX.Element {
  return <Ul>{children}</Ul>;
}
