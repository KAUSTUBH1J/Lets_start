import React, { useState } from 'react'

const StudentListing = () => {
    let Array = {
        rollNo  : 1,
        name    : 'name',
        age     : 12,
        isEdit  : 1
    };
    const [student, setStudent] = React.useState([]);
    const [rollno, setRollno] = useState(1);
    const [stuName, setStuName] = useState('');
    const [age, setAge] = useState('');
    

    const handleEdit = (rollno) => {
        const findIsEdit = student.find((stu) => stu.rollNo === rollno);
        alert(findIsEdit.isEdit )
        if(findIsEdit.isEdit){
            const updateStudentData = student.map((ele)=>{

                if(ele.rollNo === rollno){
                    return {...ele, name: stuName,isEdit: !ele.isEdit};
                }
                return ele;
            })
            console.log(updateStudentData)
            setStudent(updateStudentData);
        }else{
            const updatedStu = student.map((element)=>{
                if(element.rollNo === rollno){
                    return {...element, isEdit: !element.isEdit};
                }
                return element;
            })
            setStudent(updatedStu);
            console.log(updatedStu);
        }
    }
    const handleNameChange = (e) =>{
        let value = e.target.value;
        setStuName(value);
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

        if(stuName && age ){
            let Array ={
                rollNo  : rollno,
                name    : stuName,
                age     : age,
                isEdit  : 0
            };
            setRollno(rollno+1)
            setStuName('');
            setAge('');
            
            if(student.length === 0){
                console.log('length is zero')
                setStudent([Array]);
            }else{
                setStudent([...student, Array]);
            }
            console.log(student);
            // student.length === 0 ? setStudent(Array) : setStudent([...student, Array]);
            console.log(student.length);
        }else{
            alert('Please fill the Form ')
        }
        console.log('student');
        console.log(student);
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
                            <input type="text" className="form-control" id="StudentName" name='name' aria-describedby="emailHelp" value={stuName} onChange={handleNameChange }/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Age :</label>
                            <input type="number" className="form-control" name='age' id="exampleInputPassword1" value={age}  onChange={handleAgeChange}/>
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
                        
                        {
                             student.map((element)=>{
                                const {rollNo, name , age, isEdit} = element;
                                return (<tr key={rollNo}>
                                    <td>{rollNo}</td>
                                    <td>{!isEdit?name:<input type='text' className='form-control' name="name" value={stuName?stuName:name}  onChange={handleNameChange} />}</td>
                                    <td>{!isEdit?age:<input type='text' className='form-control' name="age"  value={age} onChange={handleChage} />}</td>
                                    <td><button className={`btn btn-${!isEdit?'primary':'success'}`} onClick={()=>handleEdit(rollNo)}>{!isEdit?'Edit':'Done'}</button></td>
                                </tr>)
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StudentListing