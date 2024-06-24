import { ReactNode, createContext, useReducer } from "react";

type TTodoProviderProps = {
  children: ReactNode;
};

export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: "addTodo" | "addComplete";
  payload: string;
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [
        ...currentState,
        {
          id: currentState.length
            ? (Number(currentState[currentState.length - 1].id) + 1).toString()
            : "1",
          title: action.payload,
          isCompleted: false,
        },
      ];
    case "addComplete":
      return currentState.map((todo:TTodo)=> todo.id === action.payload ? {...todo,isCompleted:true} : todo)

    default:
      return currentState;
  }
};

export const TodoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

const TodoProvider = ({ children }: TTodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
