import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Branchdash from './Components/Branch/Branchdash/Branchdash';
import BranchInfo from './Components/Branch/BranchInfo/BranchInfo';
import Branchstaff from './Components/Branch/Branchstaff/Branchstaff';
import ViewParcel from './Components/Branch/ViewParcel/ViewParcel';
import ReceiveParcel from './Components/Branch/ReceiveParcel/ReceiveParcel';
import PendingParcel from './Components/Branch/PendingParcel/PendingParcel';
import Addbranchparcel from './Components/Branch/Addbranchparcel/Addbranchparcel';
import BranchReport from './Components/Branch/BranchReport/BranchReport';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Branchdash/>}/>
      <Route path="/branchinfo" element={<BranchInfo/>}/>
      <Route path='/bstaff' element={<Branchstaff/>}/>
      <Route path="/viewparcel" element={<ViewParcel/>}/>
      <Route path="/receiveparcel" element={<ReceiveParcel/>}/>
      <Route path="/pendingparcel" element={<PendingParcel/>}/>
      <Route path="/addbranchparcel" element={<Addbranchparcel/>}/>
      <Route path="branchreport" element={<BranchReport/>}/>
    </Routes>
    </>
  );
}

export default App;