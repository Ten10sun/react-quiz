import styles from './Result.module.css';
import Confetti from 'react-confetti';

export default function Result({correctNum, maxQuizLen}) {
  return (
    <>
    <div className={styles.result}>
          あなたの正解数は...
          <span className={styles.resultHighlight}>
            {`全${maxQuizLen}問中${correctNum}問`}</span>
          でした！
    </div>
    <Confetti />
    </>
  )
}
