import React, { useState } from 'react';
import Popupmodel from './Popupmodel';

function UserDetails() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers ] =useState([])
  const handleShow  = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const [id, setId] = useState(0);
  
  const [isEdit, SetIsEdit] = useState(false);
  const [data, SetData]     = useState({
    name    : '',
    email   : '',
    age     : '',
    course  : '',
    gender  : '',
  });

  const addStudent = (data) =>{
    let tempdata  = users;
    data.id       = id+1;
    setId(id+1);
    tempdata.push(data);
    setUsers(tempdata);
  }

  const editstduent = (id) =>{
    const data = users.filter((user)=>user.id == id)[0];
    console.log(data);
    SetIsEdit(true);
    handleShow();
    SetData(data);
  }


  return (
    <div>
      <div className='d-flex flex-row-reverse m-2'>
        <button className="btn btn-primary m-2" onClick={handleShow}>
          Add Student
        </button>
      </div>

      <Popupmodel data={data} showModal={showModal} handleClose={handleClose} addStudent={addStudent} isEdit={isEdit} />

      <table className="table ">
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
            <td>Course</td>
            <td>Gender</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((std)=>
            <tr key={std.id}>
              <td>{std.id}</td>
              <td>{std.name}</td>
              <td>{std.email}</td>
              <td>{std.age}</td>
              <td>{std.course}</td>
              <td>{std.gender}</td>
              <td>
                <button className='btn btn-primary m-1' onClick={ ()=> editstduent(std.id) }>Edit</button>
                <button className='btn btn-danger m-1'>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
}

export default UserDetails;
