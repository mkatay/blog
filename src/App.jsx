import { BrowserRouter,Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Details} from './pages/Details'
import {AddEditPost} from './pages/AddEditPost'
import {PwReset} from './pages/PwReset'
import {NotFound} from './pages/NotFound'
import { Profile } from "./pages/Profile";
import { NavBar } from "./components/NavBar";
import { SignInUp } from "./pages/SignInUp";
import { UserProvider } from "./context/UserContext";
import { CategProvider } from "./context/CategContext";



function App() {
  return (
    <BrowserRouter>
    <UserProvider>
      <CategProvider>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="details/:id" element={<Details /> }/>
          <Route path="create" element={<AddEditPost />}/>
          <Route path="update/:id" element={<AddEditPost />}/>
          <Route path="signinup/:type" element={<SignInUp />}/>
          <Route path="pwreset" element={<PwReset />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      </CategProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
