import {  useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../actions/index";


export const useAppDispatch= useDispatch;
export const useAppSelector = useSelector;

export const useAction = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};