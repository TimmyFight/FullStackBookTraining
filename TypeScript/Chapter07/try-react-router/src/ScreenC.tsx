import {FC} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface ScreenCProps {
  message: string;
}

const ScreenC: FC<ScreenCProps> = ({message}) => {
  let {userid} = useParams();
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <div>{message}</div>
      <div>Your ID: {userid}</div>
      <button onClick={goBack}>Back to previous page</button>
    </>
  );
}

export default ScreenC; 
