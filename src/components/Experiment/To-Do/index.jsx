import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
export default function index () {
    return(
        <>
            <div className="container text-center d-flex flex-column align-items-center">
                <h1>
                    To Do List 
                </h1>
                <div className="input-group mb-3 w-50 ">
                    <input type="text" className="form-control" placeholder="Add new Todo" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                </div>
                <div className="container w-50">
                    <div className="d-flex flex-row align-items-center justify-content-between border p-2">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit cum a. </p>
                        <button className="btn btn-danger"><FontAwesomeIcon  icon={faDeleteLeft} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}