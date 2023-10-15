import React from 'react'
function Sidebar() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block sidebar bg-white">
            <div className="sidebar-sticky">
              <h1 className="sidebar-heading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notes App</h1>
              <button className="btn btn-primary">
                <i className="fa-solid fa-file-lines"></i>&nbsp;&nbsp;Notes
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;