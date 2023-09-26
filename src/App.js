import { useState } from 'react';
import './App.css';

const ttlHrsWeek = 24 * 7;
function App() {
  
  const [form, setForm] = useState({})

  const [taskList, setTaskList] = useState([]);
  const totalHrs = taskList.reduce((acc, item) => acc + +item.hr, 0)
  
  const handleOnChange = (e) => {
    const {name, value} = e.target;
    // console.log(value, name);

    setForm({
      ...form,
      [name] : value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (totalHrs + +form.hr > ttlHrsWeek) {
      return alert("Sorry not enogh time to fit this task from the week")
    }

    const obj = {
      ...form,
      id: randomStr(),
      type: "entry",
    };

    setTaskList([
      ...taskList,
      obj
    ])

   
    // const ttlHrs = total();

    // if (ttlHrs + obj.hr > ttlHrPerWeek) {
    //     return alert ("Sorry not enough time let to fit this task from week")
    // }
}

const randomStr = () => {
  const charLenth = 6
  const str = "qwertyuiopasdfghjklzxvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

  let id = ""

  for (let i = 0; i < charLenth; i++) {
      const randNum = Math.round(Math.random() * (str.length - 1));
      id += str[randNum];
  }
  return id;

}

const handleOnDelete = (id) => {
  if (window.confirm("are you sure you want to delete?")) {
      const filterArg = taskList.filter((item) => item.id !== id);
      setTaskList(filterArg);
  }

};

const switchTask = (id, type) => {
  const arg = taskList.map((item) => {
    if(item.id === id)
    return {
      ...item,
      type,
    };
    return item;
  })

  setTaskList(arg);
}

const entry = taskList.filter((item)=> item.type === "entry");
const bad = taskList.filter((item)=> item.type === "bad");

console.log(taskList);
  return (
    <div className="wrapper">
        <div className="container">
            {/* <!-- top title --> */}
            <div className="row">
                <div className="col mt-5 text-center ">
                    <h1>Not to do list</h1>
                </div>
            </div>

        {/* <!-- form id for form --> */}
            <form  onSubmit={handleOnSubmit} className="mt-5 border p-3 py-5 rounded-4 shadow-lg bg-transparent" > 
                <div className="row g-4">
                    <div className="col-md-7">
                      <input type="text" className="form-control" placeholder="coding" aria-label="First name" name="task" required onChange={handleOnChange}/>
                    </div>
                    <div className="col-md-2">
                      <input type="number" min="1" className="form-control" placeholder="" aria-label="Last name" name="hr" required onChange={handleOnChange} />
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid ">
                            <button className="btn btn-primary">
                                Add Task
                            </button>
                        </div>
                        
                    </div>
                </div>
            </form>

        {/* <!-- table area --> */}
            <div className="row mt-5 pt-2">
                {/* <!-- entry list --> */}
                <div className="col-md">
                    <h3 className="text-center">Task Entry List</h3><hr/>
                    <table className="table table-striped table-hover border-light"> 
                        <tbody id="entry">
                          {
                            entry.map((item, i) =>  (
                              <tr>
                          <td>{i + 1}</td>
                          <td>{item.task}</td>
                          <td>{item.hr}hr</td>
                          <td className="text-end">
                              <button 
                              onClick={() => handleOnDelete(item.id)}
                              className="btn btn-danger mx-2">
                                  <i className="fa-solid fa-trash"></i>
                              </button>
                              <button 
                              onClick={() => switchTask(item.id, "bad")}
                              className="btn btn-success">
                                  <i className="fa-solid fa-chevron-right"></i>
                              </button>
                          </td>
                        </tr>
                            ))
                          }
                        </tbody>
                      </table>
                </div>
                {/* <!-- bad list --> */}
                <div className="col-md">
                    <h3 className="text-center">Bad List</h3><hr />
                    <table className="table table-striped table-hover border-light"> 
                        <tbody id ="bad">
                        {
                            bad.map((item, i) =>  (
                              <tr>
                          <td>{i + 1}</td>
                          <td>{item.task}</td>
                          <td>{item.hr}hr</td>
                          <td className="text-end">
                            <button 
                              onClick={() => switchTask(item.id, "entry")}
                              className="btn btn-warning mx-2">
                                  <i className="fa-solid fa-chevron-left"></i>
                              </button>
                              <button 
                              onClick={() => handleOnDelete(item.id)}
                              className="btn btn-danger">
                                  <i className="fa-solid fa-trash"></i>
                              </button>
                              
                          </td>
                        </tr>
                            ))
                          }
                        </tbody>
                      </table>
                      <div className="alert alert-info"> 
                        You could have save =
                        <span id ="badHr">{
                          bad.reduce((acc, item) => acc + +item.hr, 0)
                          
                        }</span> hr
                        
                      </div>
                </div>
            </div>
            
            
        
        {/* <!-- total time allocated --> */}
        <div className="alert alert-info"> 
            Total hrs per week allocated = 
            <span id="totalHr">{ totalHrs   
            }</span> hr
        </div>
        
        {/* <!-- <button className="btn btn-outline-primary">Hi there! <i className="fa-solid fa-trash"></i></button> --> */}
        </div>
        
    </div>
  );
}

export default App;
