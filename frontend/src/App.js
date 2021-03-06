import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MissionsScreen from './screens/MissionsScreen';
import ContactScreen from './screens/ContactScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UsersListScreen from './screens/UsersListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductsListScreen from './screens/ProductsListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrdersListScreen from './screens/OrdersListScreen';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/admin/userslist' component={UsersListScreen} />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            <Route
              exact
              path='/admin/productslist'
              component={ProductsListScreen}
            />
            <Route
              exact
              path='/admin/productslist/:pageNumber'
              component={ProductsListScreen}
            />
            <Route
              path='/admin/product/:id/edit'
              component={ProductEditScreen}
            />
            <Route path='/admin/orderslist' component={OrdersListScreen} />
            <Route exact path='/search/:keyword' component={HomeScreen} />
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/page/:pageNumber' component={HomeScreen} />
            <Route
              exact
              path='/search/:keyword/page/:pageNumber'
              component={HomeScreen}
            />
            <Route exact path='/about' component={AboutScreen} />
            <Route exact path='/missions' component={MissionsScreen} />
            <Route exact path='/contact' component={ContactScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
