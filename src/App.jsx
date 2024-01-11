import { BrowserRouter,Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Details} from './pages/Details'
import {AddEditPost} from './pages/AddEditPost'
import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'
import {PwReset} from './pages/PwReset'
import {NotFound} from './pages/NotFound'
import { Profile } from "./pages/Profile";
import { NavBar } from "./components/NavBar";



function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="details/:id" element={<Details /> }/>
          <Route path="create" element={<AddEditPost />}/>
          <Route path="update/:id" element={<AddEditPost />}/>
          <Route path="signin" element={<SignIn />}/>
          <Route path="signup" element={<SignUp />}/>
          <Route path="pwreset" element={<PwReset />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
