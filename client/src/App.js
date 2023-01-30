import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import NotFound from './components/NotFound';
import AddToCart from "./pages/AddToCart";
import Category from "./components/Category";
import Login from "./pages/Login";
import LuxuryDetail from "./pages/LuxuryDetail";
import LuxuryGallery from "./pages/LuxuryGallery";
import LuxurySell from "./pages/LuxurySell";
import MyPageCompany from "./pages/MyPageCompany";
import MyPageUser from "./pages/MyPageUser";
import Payment from "./pages/Payment";
import Post from "./pages/Review";
import Recell from "./pages/Recell";
import SignupCompany from "./pages/SignupCompany";
import SignupUser from "./pages/SignupUser";
import SignupMain from "./pages/SignupMain";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Review from "./pages/Review";
import ReviewPost from "./pages/ReviewPost";
import FAQ from "./pages/FAQ";

function App() {
  return (

    <div className="App min-w-[1300px]">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
        <Route path='/cart' element={<AddToCart />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/luxurydetail/:id' element={<LuxuryDetail />}></Route>
        <Route path='/luxurygallery' element={<LuxuryGallery />}></Route>
        <Route path='/luxurysell' element={<LuxurySell />}></Route>
        <Route path='/mypagecompany' element={<MyPageCompany />}></Route>
        <Route path='/mypageuser' element={<MyPageUser />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='/post' element={<Post />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/reviewpost' element={<ReviewPost />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/recell' element={<Recell />}></Route>
        <Route path='/signupcompany' element={<SignupCompany />}></Route>
        <Route path='/signupmain' element={<SignupMain />}></Route>
        <Route path='/signupuser' element={<SignupUser />}></Route>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;