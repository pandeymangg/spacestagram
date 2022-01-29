import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = (actions) => {
  const dispatch = useDispatch();
  const actionCreators = bindActionCreators(actions, dispatch);
  return actionCreators;
};
