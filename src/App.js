import './App.css';

function App() {
  return (
    <div class="wrapper">
        <div class="container">
            {/* <!-- top title --> */}
            <div class="row">
                <div class="col mt-5 text-center ">
                    <h1>Not to do list</h1>
                </div>
            </div>

        {/* <!-- form id for form --> */}
            <form  onsubmit="handleOnSubmit(this)" action="javascript:void(0)" class="mt-5 border p-3 py-5 rounded-4 shadow-lg bg-transparent" > 
                <div class="row g-4">
                    <div class="col-md-7">
                      <input type="text" class="form-control" placeholder="coding" aria-label="First name" name="task" required />
                    </div>
                    <div class="col-md-2">
                      <input type="number" min="1" class="form-control" placeholder="" aria-label="Last name" name="hr" required />
                    </div>
                    <div class="col-md-3">
                        <div class="d-grid ">
                            <button class="btn btn-primary">
                                Add Task
                            </button>
                        </div>
                        
                    </div>
                </div>
            </form>

        {/* <!-- table area --> */}
            <div class="row mt-5 pt-2">
                {/* <!-- entry list --> */}
                <div class="col-md">
                    <h3 class="text-center">Task Entry List</h3><hr/>
                    <table class="table table-striped table-hover border-light"> 
                        <tbody id="entry">
                          
                        </tbody>
                      </table>
                </div>
                {/* <!-- bad list --> */}
                <div class="col-md">
                    <h3 class="text-center">Bad List</h3><hr />
                    <table class="table table-striped table-hover border-light"> 
                        <tbody id ="bad">
                          
                        </tbody>
                      </table>
                      <div class="alert alert-info"> 
                        You could have save =
                        <span id ="badHr">0</span> hr
                      </div>
                </div>
            </div>
            
            
        
        {/* <!-- total time allocated --> */}
        <div class="alert alert-info"> 
            Total hrs per week allocated
            <span id="totalHr">0</span> hr
        </div>
        
        {/* <!-- <button class="btn btn-outline-primary">Hi there! <i class="fa-solid fa-trash"></i></button> --> */}
        </div>
        
    </div>
  );
}

export default App;
