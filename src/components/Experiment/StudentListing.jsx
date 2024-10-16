import React from 'react'

const StudentListing = () => {
    const [student, setStudent] = React.useState([
        {
            rollNo :1,
            name:'kaustubh',
            age:24,
            isEdit:0
        }]
    );

    const handleEdit = () => {
        if(student.isEdit == 1){
            setStudent({...student,isEdit:0});
        }else{
            setStudent({...student,isEdit:1});
        }
    }

    const handleChage = (event) =>{
        let value = event.target.value;

        setStudent({...student,[event.target.name]:value})
    }
    const handleSubmit = () =>{
        
    }
  return (
    <>
        <div className='container'>
            &nbsp;
            <div className='container border p-3 my-2'>
                <h6 className='text-center display-2'>Add Student Form</h6>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="StudentName" className="form-label">Name :</label>
                        <input type="text" className="form-control" id="StudentName" name='name' aria-describedby="emailHelp"  onChange={handleChage}/>
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Age :</label>
                        <input type="number" className="form-control" name='age' id="exampleInputPassword1"  onChange={handleChage}/>
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