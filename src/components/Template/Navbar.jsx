import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { GobleState } from '../../App';
export default function Navbar(props) {
    const {mode, toggle} = useContext(GobleState);
  return (
    <>
        <nav className={`navbar fixed-top  navbar-expand-lg ${mode === 'light' ? 'bg-body-tertiary' : 'bg-dark' } `}  data-bs-theme={`${mode === 'light' ? 'light':'dark'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.Title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Experiment
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className=" dropdown-item " to="/TextAnalyzer">TextAnalyzer</Link></li>
                            <li><Link className=" dropdown-item " to="/Calculater">Calculater </Link></li>
                            <li><Link className=" dropdown-item " to="/StudentList">Student List </Link></li>
                            <li><Link className=" dropdown-item " to="/MCQ_test">MCQ Test </Link></li>
                            <li><Link className=" dropdown-item " to="/DropDwon">DropDwon</Link></li>
                            <li><Link className='dropdown-item' to='/product-filter'>Product Filter</Link></li>
                     </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        News
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/business">Business</Link></li>
                            <li><Link className="dropdown-item" to="/entertainment">Entertainment </Link></li>
                            <li><Link className="dropdown-item" to="/general">General</Link></li>
                            <li><Link className="dropdown-item" to="/health">Health </Link></li>
                            <li><Link className="dropdown-item" to="/science">Science </Link></li>
                            <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                            <li><Link className="dropdown-item" to="/technology">Technology </Link></li>        
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/about">About</Link>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search"> */}
                <div className='form-check form-switch text' >
                    <input className='form-check-input' type="checkbox" id='mode' onClick={() => toggle()} />
                    <label className={`nav-item ${mode === 'light' ? '':'text-white'}`} htmlFor="mode" >Enble Dark Mode</label>
                </div>
                {/* </form> */}
                </div>
            </div>
        </nav>
    </>
  )
}
