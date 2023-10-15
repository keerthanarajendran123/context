import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./compontents/Sidebar";
import Createnotes from "./compontents/Createnotes";
import Noteslist from "./compontents/Noteslist";
import { NoteProvider } from './compontents/NotesContext';

function App() {
  return (
    <NoteProvider>
      <Sidebar />
      <Createnotes />
       <div className="container">
        <div className="row justify-content-center">
           <div className="col-md-8">
            <Noteslist />
           </div>
        </div>
      </div> 
      </NoteProvider>
  );
}

export default App;
