import React, { useState } from 'react'

const StudentListing = () => {
    let Array = {
        rollNo  : 1,
        name    : 'name',
        age     : 12,
        isEdit  : 1
    };
    const [student, setStudent] = React.useState([]);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    

    const handleEdit = () => {
        if(student.isEdit == 1){
            setStudent({...student,isEdit:0});
        }else{
            setStudent({...student,isEdit:1});
        }
    }
    const handleNameChange = (e) =>{
        let value = e.target.value;
        setName(value);
    }
    
    const handleAgeChange = (e) =>{
        let value = e.target.value;
        setAge(value);
    }

    const handleChage = (event) =>{
        let value = event.target.value;
        setStudent({...student,[event.target.name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let Array ={
            rollNo  : 1,
            name    : name,
            age     : age,
            isEdit  : 1
        };
        setStudent(student.concat(Array));
    }

    return (
        <>
            <div className='container'>
                &nbsp;
                <div className='container border p-3 my-2'>
                    <h6 className='text-center display-2'>Add Student Form</h6>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="StudentName" className="form-label">Name :</label>
                            <input type="text" className="form-control" id="StudentName" name='name' aria-describedby="emailHelp"  onChange={handleNameChange }/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Age :</label>
                            <input type="number" className="form-control" name='age' id="exampleInputPassword1"  onChange={handleAgeChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <table className='table my-3'>
                    <thead>
                        <tr>
                            <th width="10%">Sr.No.</th>
                            <th width="40%">Name</th>
                            <th width="20%">Age</th>
                            <th width="20%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{student.isEdit?student.rollNo:<input type='text' className='form-control' name="rollNo" value={student.rollNo} onChange={handleChage} />}</td>
                            <td>{student.isEdit?student.name:<input type='text' className='form-control' name="name" value={student.name} onChange={handleChage} />}</td>
                            <td>{student.isEdit?student.age:<input type='text' className='form-control' name="age"  value={student.age} onChange={handleChage} />}</td>
                            <td><button className={`btn btn-${student.isEdit?'primary':'success'}`} onClick={handleEdit}>{student.isEdit?'Edit':'Done'}</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StudentListing