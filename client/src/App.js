import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import NotFound from './components/NotFound';
import AddToCart from "./pages/AddToCart";
import Category from "./components/Category";
import Login from "./pages/Login";
import LuxuryDetail from "./pages/LuxuryDetail";
import LuxuryGalleryAcc from "./pages/LuxuryGalleryAcc";
import LuxuryGalleryMan from "./pages/LuxuryGalleryMan";
import LuxuryGalleryWomen from "./pages/LuxuryGalleryWomen";
import LuxurySell from "./pages/LuxurySell";
import LuxuryResister from "./pages/LuxuryResister";
import MyPage from "./pages/MyPage";
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
import FAQPost from "./pages/FAQPost";

import Like from "./pages/Like";
import LuxurySellUser from "./pages/LuxurySellUser";

import ReviewDetail from "./pages/ReviewDetail";
import Exchange from "./pages/Exchange";
import SearchResult from "./pages/SearchResult";

function App() {
  return (

    <div className="App min-w-[1300px]">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
        <Route path='/cart/:id' element={<AddToCart />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/luxurydetail/:id' element={<LuxuryDetail />}></Route>
        <Route path='/luxurygalleryAcc' element={<LuxuryGalleryAcc />}></Route>
        <Route path='/luxurygalleryMan' element={<LuxuryGalleryMan />}></Route>
        <Route path='/luxurygalleryWomen' element={<LuxuryGalleryWomen />}></Route>
        <Route path='/luxurysell/:id' element={<LuxurySell />}></Route>
        <Route path='/luxuryresister' element={<LuxuryResister />}></Route>
        <Route path='/mypage' element={<MyPage />}></Route>
        <Route path='/payment/:id' element={<Payment />}></Route>
        <Route path='/post' element={<Post />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/reviewpost/:id' element={<ReviewPost />}></Route>
        <Route path='/reviewdetail/:id' element={<ReviewDetail />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/recell' element={<Recell />}></Route>
        <Route path='/signupcompany' element={<SignupCompany />}></Route>
        <Route path='/signupmain' element={<SignupMain />}></Route>
        <Route path='/signupuser' element={<SignupUser />}></Route>
        <Route path='/likelist' element={<Like />}></Route>
        <Route path='/luxuryselluser/:id' element={<LuxurySellUser />}></Route>
        <Route path='/FAQPost' element={<FAQPost />}></Route>
        <Route path='/exchange' element={<Exchange />}></Route>
        <Route path='/searchresult' element={<SearchResult />}></Route>

      </Routes>
      <Footer />
    </div>

  );
}

export default App;