import { styled } from "styled-components";
import { Task } from "../../types/interfaces";
import { ImBin2 } from "react-icons/im";

interface TaskItemProps extends Task {
  removeItem(id: string): void;
  checkItem(id: string): void;
}

const Li = styled.li`
  background-color: white;
  border: none;
  border: 5px;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  padding: 0;
  width: 100%;
  cursor: pointer;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: var(--red);
  height: 100%;
  margin: 1rem;
  padding: 0;
  &:hover {
    color: var(--dark-red);
    cursor: pointer;
  }
`;

const P = styled.p`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Input = styled.input`
  appearance: none;
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  height: 1.25em;
  margin: 1rem;
  min-width: 1.25em;
  min-height: 1.25em;
  outline: 0;
  position: relative;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  width: 1.25em;
  &::before {
    position: absolute;
    content: "";
    display: block;
    top: 0px;
    left: 6px;
    width: 4px;
    height: 10px;
    border-style: solid;
    border-color: white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    background: var(--green);
    border-color: var(--green);
    color: white;
    &::before {
      opacity: 1;
    }
    &:checked {
      background: var(--green);
      border-color: var(--green);
      color: white;
    }
  }
`;

export function TaskItem({
  id,
  text,
  isChecked,
  removeItem,
  checkItem,
}: TaskItemProps): JSX.Element {
  const handleButtonOnClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
    removeItem(id);
  };

  return (
    <Li
      className={isChecked ? "bg-color-grey" : ""}
      onClick={() => checkItem(id)}
    >
      {/* the checkbox is readonly cuz the onChange event is handled by Li element */}
      <Input type="checkbox" checked={isChecked} readOnly />
      <P className={isChecked ? "striked" : ""}>{text}</P>
      <Button onClick={handleButtonOnClick}>
        <ImBin2 />
      </Button>
    </Li>
  );
}
