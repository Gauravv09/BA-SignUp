import Header from "./components/Header";
import Footer from "./components/Footer";
import SignupForm from "./pages/SignupForm";
import  "./App.css";

function App() {
  return (
    <div className="App" style={{display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh'}} >
      <Header />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default App;
