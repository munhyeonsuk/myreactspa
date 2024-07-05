
//png,gif,jpg
//svg는 xml태그 모듈이니 import로 한다
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg'

const App = () => {
  return (
    <header id="hd" className='border-bottom'>
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className='col-4 col-md-2'>
          <a href="/" className='d-block'><img src={logo} alt="/" className='w-100'/>
          </a>
          </h1>
        <ul id="gnb" className="d-flex">
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
        </ul>
      </div>
    </header>
  );
}

export default App;
