import React,{useState,useEffect} from 'react'
import './styles/slideup.css'

const SlideUp = () => {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 15000); // Show the form after 15 seconds
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className={`slide-up-form  ${showForm ? 'show' : ''}`}>
        <form>
         
          <div class="coolinput">
    <label for="input" class="text">Name:</label>
    <input type="text" placeholder="Write here..." name="input" class="input" />
</div>
<div class="coolinput">
    <label for="input" class="text">Passworn:</label>
    <input type="text" placeholder="Write here..." name="input" class="input" />
</div>
  
  
          <button>
          Sign up
          <div class="arrow-wrapper">
              <div class="arrow"></div>
          </div>
</button>
        </form>
      </div>
    );
}

export default SlideUp
