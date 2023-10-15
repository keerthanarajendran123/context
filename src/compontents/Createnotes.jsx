import React from "react";
function Createnotes() {
  
  return (
    <div className="container my-4">
      <div className="row  justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Add a note</h2>
              <form>
                <div className="form-group">
                  <label For="noteTitle"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="noteTitle"
                    placeholder="Title"/>
                </div>
                <div className="form-group">
                  <label For="noteContent"></label>
                  <textarea
                    className="form-control"
                    id="noteContent"
                    rows="4"
                    placeholder="Take a note...">
                    </textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createnotes;
