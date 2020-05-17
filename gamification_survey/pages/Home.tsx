import Footer from '../components/Footer';
import LanguageSelection from '../components/LanguageSelection';
import HomeContent from '../components/English/HomeContent';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <LanguageSelection />
      <HomeContent />
      <hr style={{ width: '98%' }} />
      <Footer />
    </div>
  );
};
export default Home;
