import { useState, useEffect } from "react";

import { useDispatch, useStore } from "../contexts/AppContext";
import { SET_CAROUSEL_ITEM } from "../actions/types";

const Carousel = () => {

  const dispatch = useDispatch();
  const state = useStore();

  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(0);

  const clearTimer = () => {
    if(timer) clearInterval(timer);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex(i => (i < (state.resources.length - 1)? (i + 1): 0));
    }, 3000);
    setTimer(timerId);
    return clearTimer;
  }, []);

  useEffect(() => {
    dispatch({
      type: SET_CAROUSEL_ITEM,
      payload: {
        index,
        item: state.resources[index]
      }
    });
  }, [index]);

  return null;
};

export default Carousel;