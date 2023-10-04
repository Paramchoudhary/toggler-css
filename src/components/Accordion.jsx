import React,{useState} from 'react';
import "./accord.css"
function Accordion({question,answer}){

    const [isOpen,setIsOpen] = useState(false);

    const toggleAccordion = () =>{
        setIsOpen(!isOpen);
    };

    return(
        <div className='accordion-item'>
            <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>{question}</div>
            {isOpen && <div className="accordion-content">{answer}</div>}

        </div>
    )

}
export default Accordion;