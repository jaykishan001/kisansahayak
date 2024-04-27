import Postform from "./components/Postform";
import { Footer, Header } from './components'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login } from './store/authSlice'
import FarmingSeason from './components/FarmingSeason'
// import { Outlet } from 'react-router-dom'

function App() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        dispatch(login(userData));
      })
      .catch((error) => {
        console.log("error while fetching userData", error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return !loader ? (
    <div className="">
      <Header />
      <Postform />
      <main>{
      /* <Outlet /> */}
        <FarmingSeason />
      </main>
      <Footer />
      
    </div>
  ) : null;
}

export default App;
