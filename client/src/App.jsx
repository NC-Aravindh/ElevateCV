import Layout from "./components/Layout/Layout";
import EditResume from "./pages/EditResume";
import Home from "./pages/Home";
import {Routes , Route} from 'react-router';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resumeEdit" element={<EditResume/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
