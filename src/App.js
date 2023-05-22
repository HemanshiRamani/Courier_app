import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Branchdash from './Components/Branch/Branchdash/Branchdash';
import BranchInfo from './Components/Branch/BranchInfo/BranchInfo';
import Branchstaff from './Components/Branch/Branchstaff/Branchstaff';
import ViewParcel from './Components/Branch/ViewParcel/ViewParcel';
import ReceiveParcel from './Components/Branch/ReceiveParcel/ReceiveParcel';
import PendingParcel from './Components/Branch/PendingParcel/PendingParcel';
import Addbranchparcel from './Components/Branch/Addbranchparcel/Addbranchparcel';
import BranchReport from './Components/Branch/BranchReport/BranchReport';
import Landingpage from "./Components/User/Landingpage/Landingpage";
import Usertrackparcel from "./Components/User/Usertrackparcel/Usertrackparcel"
import Login from './Components/Login/Login';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Addbranch from "./Components/Admin/Addbranch/Addbranch";
import EditBranch from './Components/EditBranch/EditBranch';
import ReportDetail from "./Components/Admin/ReportDetail/ReportDetail";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Branchdash />} />
        <Route path="/branchinfo" element={<BranchInfo />} />
        <Route path='/bstaff' element={<Branchstaff />} />
        <Route path="/viewparcel" element={<ViewParcel />} />
        <Route path="/receiveparcel" element={<ReceiveParcel />} />
        <Route path="/pendingparcel" element={<PendingParcel />} />
        <Route path="/addbranchparcel" element={<Addbranchparcel />} />
        <Route path="branchreport" element={<BranchReport />} />

        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="/addbranch" element={<Addbranch/>}/>
        <Route path="/branchtable" element={<EditBranch/>}/>
        <Route path="reportdetails" element={<ReportDetail/>}/>
        

        <Route path="/login" element={<Login/>}/>

        <Route path="/user" element={<Landingpage/>}/>
        <Route path="usertrackparcel" element={<Usertrackparcel/>}/>
      </Routes>

    </>
  );
}

export default App;