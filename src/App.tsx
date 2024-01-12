import CartInfo from './modules/CartInfo/CartInfo';
import Footer from './modules/Footer/Footer';

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <CartInfo
        name="Vitaly Shishou"
        about="Hi there! I am a frontend developer living in Belarus."
      />
      <Footer />
    </>
  );
}

export default App;
