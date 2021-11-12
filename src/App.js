import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import NotFound from './components/Pages/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder';
import AddEvent from './components/Event/AddEvent/AddEvent';
import MyEvent from './components/Event/MyEvent/MyEvent';
import ManageEvent from './components/Event/ManageEvent/ManageEvent';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import Conform from './components/Pages/Conform/Conform';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/event/:eventId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:eventId">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="/my-events">
            <MyEvent></MyEvent>
          </Route>
          <Route path="/manage-event">
            <ManageEvent></ManageEvent>
          </Route>
          <Route path="/add-event">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/conform">
            <Conform></Conform>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
