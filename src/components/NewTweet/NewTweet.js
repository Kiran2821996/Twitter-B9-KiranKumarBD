import "./NewTweet.css";
import { useState,createContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const fecthedData = createContext();

function NewTweet({children}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [twiting,setTwiting]=useState("")
  const [newTweet,setNewTweet]=useState([])

  const handleClick=()=>{
    newTweet.unshift(twiting)
    setNewTweet([...newTweet])
    setTwiting("")
    setShow(false)
  }

  return (
    <>
      <button
        onClick={handleShow}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="tweet-btn">
        Tweet
      </button>
      
    
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add New Tweet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value={twiting}   onChange={e => setTwiting(e.target.value)} />
          </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClick}>
            Tweet
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <fecthedData.Provider value={{newTweet}}>
    {children}
    </fecthedData.Provider>
      
    </>
  );
}

export default NewTweet;
export {fecthedData}