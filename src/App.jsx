import Wrapper from './components/Wrapper/Wrapper'
import ModalWindow from './components/ModalWindow/ModalWindow';
import { useState , useEffect } from 'react';


function App() {
const [isOpenModal, setIsOpenModal] = useState(false);
useEffect(() => {
  const idTimeOut = setTimeout(()=> {setIsOpenModal(true)} ,2000)
  return () => {
    clearTimeout(idTimeOut)
  };
}, []);
const closeModal = ()=>{setIsOpenModal(false)}
  return (
    <>
    {isOpenModal && (<ModalWindow closeModal={closeModal}>
      <h3>ModalWindow</h3>
    </ModalWindow>)}
  <Wrapper>
    <h2>hi
      
    </h2>
  </Wrapper>

     </>
    
  );
}

export default App;
