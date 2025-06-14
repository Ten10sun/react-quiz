import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ROUTES from '../const';
import Result from '../components/Result/Result';
import Loading from '../components/Loading/Loading';
import { useState, useEffect } from 'react';

export default function ResultPage() {
  const { correctNum, maxQuizLen } = useLocation().state;
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 3000);
  }, []);
  return (
    <>
    <Loading active={active} />
    <h1>Result</h1>
    <Result correctNum={correctNum} maxQuizLen={maxQuizLen} />
    <br />
      <Link  to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </>
  )
}
