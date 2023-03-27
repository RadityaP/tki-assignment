import { useSelector, useDispatch } from 'react-redux';
import { headerAction } from '../store/reducer/header';
import timeFormatter from '../utils/timeFormater';

const useHeaderCounter = () => {
  const dispatch = useDispatch();
  const { fuel, star, time } = useSelector((state) => state.header);
  const formattedTime = timeFormatter(time);

  const startCounter = () => {
    dispatch(headerAction.startCounter());
  };

  const minusFuel = () => {
    dispatch(headerAction.minusFuel());
  };

  return {
    fuel,
    star,
    time,
    formattedTime,
    startCounter,
    minusFuel,
  };
};

export default useHeaderCounter;
