
import Navbar from './components/commonComponent/Navbar'
import './App.css';
import Scroll from './components/commonComponent/Scroll';
import Blogs from './components/Blogs/Blogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import BlogList from './components/Blogs/BlogList';
import Home from './components/Home/Home';
import Hello from './components/Hello_msg/Hello';
import Employee from './components/Employe_data/Employee';
import Counter from './components/Counter/Counter';
import Use_context from './components/Use_Conetext/Use_context';
import Use_reducer from './components/Use_reducer/Use_reducer';
import Use_reducer_by_me from './components/Use_reducer/Use_reducer_by_me';
import Calculator from './components/Calculator/Calculator';
import Input from './components/Input/SimpleForm';
import SimpleForm from './components/Input/SimpleForm';
import Simple_input from './components/Simple_input/Simple_input';
import Sign_up from './components/Sign_up/Sign_up';
import Signup_adv from './components/Signup_adv/Signup_adv';
import Formik_inp from './components/Formik_inp/Formik_inp';
import Adv_counter from './components/Adv_counter/Adv_counter';
import Show_data from './components/Signup_adv/Show_data';
import Get_list from './components/Api_integration/Get_list';
import PostApi from './components/Api_integration/PostApi';
import Post_api_formik from './components/Post_api_formik/Post_api_formik';
import My_api from './components/Api_integration/My_api';
import My_post_api from './components/Api_integration/My_post_api';
import Post_put from './components/Api_integration/Post_put';
import Form_adv from './components/Form_adv/Form_adv';
import Formik_api from './components/Formik_api/Formik_api';
import Fullstack from './components/Api_integration/FullStack';
import FullStackForm from './components/FullStack/FullStackForm';
import SignUpFullStack from './components/SignUpFullStack/SignUpFullStack';



function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Hello />} />
          <Route path="/blogs" exact element={<Blogs />} />
          <Route path="/emp" exact element={<Employee/>} />
          <Route path="/counter" exact element={<Counter/>} />
          <Route path="/use-context" exact element={<Use_context/>} />
          <Route path="/use-reducer" exact element={<Use_reducer/>} />
          <Route path="/use-reducer-by-me" exact element={<Use_reducer_by_me/>} />
          <Route path="/calculator" exact element={<Calculator/>} />
          <Route path="/input" exact element={<SimpleForm />} />
          <Route path="/simple-input" exact element={<Simple_input />} />
          <Route path="/sign-up" exact element={<Sign_up />} />
          <Route path="/signup-adv" exact element={<Signup_adv />} />
          <Route path="/formik" exact element={<Formik_inp />} />
          <Route path="/adv-counter" exact element={<Adv_counter />} />
          <Route path="/show-data" exact element={<Show_data />} />
          <Route path="/get-list" exact element={<Get_list />} />
          <Route path="/post-app" exact element={<PostApi />} />
          <Route path="/post-api-formik" exact element={<Post_api_formik />} />
          <Route path="/my-api" exact element={<My_api/>} />
          <Route path="/my-post-api" exact element={<My_post_api/>} />
          <Route path="/post-put" exact element={<Post_put/>} />
          <Route path="/form-adv" exact element={<Form_adv/>} />
          <Route path="/formik-api" exact element={<Formik_api/>} />
          <Route path="/fullstack" exact element={<Fullstack/>} />
          <Route path="/fullstack-form" exact element={<FullStackForm/>} />
          <Route path="/signup-fullstack" exact element={<SignUpFullStack/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
