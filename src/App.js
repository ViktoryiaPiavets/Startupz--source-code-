import './App.css';
import { Header } from './containers/Header';
import { About } from './components/About/About';
import {
  WHO_WE_ARE_TITLE,
  WHO_WE_ARE_SUMMARY,
  WHO_WE_ARE_DETAILS,
  PHRASE_PROBLEMS,
  PHRASE_STARTUPS,
  CORE_VALUES_TITLE,
  CORE_VALUES_DETAILS
} from './constants';
import { PhraseBlock } from './components/PhraseBlock/PhraseBlock';
import questionImg from './assets/images/question.svg';
import lighbulbImg from './assets/images/lightbulb.svg';
import { Works } from './containers/Works';
import { Hiring } from './containers/Hiring';
import { FormBlock } from './containers/FormBlock';
import { Footer } from './containers/Footer';

function App() {
  return (
    <>
      <Header />
      <About title={WHO_WE_ARE_TITLE} summary={WHO_WE_ARE_SUMMARY} details={WHO_WE_ARE_DETAILS} imagePath={questionImg}/>
      <PhraseBlock isChatEnabled text={PHRASE_PROBLEMS} />
      <About title={CORE_VALUES_TITLE} details={CORE_VALUES_DETAILS} imagePath={lighbulbImg}/>
      <Works />
      <PhraseBlock text={PHRASE_STARTUPS} />
      <Hiring />
      <FormBlock />
      <Footer />
    </>
  );
}

export default App;
