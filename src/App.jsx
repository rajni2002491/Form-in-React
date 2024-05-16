import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './heading';
import FirstName from './FirstName';
import SecondName from './SecondName';
import ThirdMail from './ThirdMail';
import FourCon from './FourCon';
import Gen from './Gen';
import Sub from './Sub';
import Resume from './Resume';
import Url from './Url';
import Coice from './coice';
import About from './About';
import Last from './Last';


function App() {
 return  <div class='app'>
  <Heading/>
  <div class="text">
  <FirstName/>
  <SecondName/>
  <ThirdMail/>
  <FourCon/>
  <Gen/>
  <Sub/>
  <Resume/>
  <Url/>
  <Coice/>
  <About/>
  <Last/>
 </div>
 </div>
}
export default App;


