import {useState , useEffect} from 'react';

const TextAreaAfterSave = () => {
    const [text, setText] = useState("");
    const changeText = (event) => {setText(event.target.value)}
    useEffect(() => {
        const saveText = localStorage.getItem('saveText')
      if (saveText) {
        setText(saveText)
        
      }
    }, []);
    useEffect(() => {
        localStorage.setItem('saveText', text)
       
    }, [text]);
    return (
        <section>
            <h3>auto save text area</h3>
            <textarea name="" id="" rows='5' cols='40' value={text} onChange={changeText}></textarea>
            
        </section>
    );
}

export default TextAreaAfterSave;
