import React from 'react'
import './styles/hireme.css'
import firstimg from '../assets/hireme-img/badge.png'
import secondimg from '../assets/hireme-img/liability.png'
import thirdimg from '../assets/hireme-img/safe.png'
const Hireme = () => {
  return (
    <div className="hire-me">
      <h2>Why You Should <span style={{color:'purple'}}>Hire Me</span>?</h2>
      <div className="points-container">
        <div className="point">
        <img className='all-img' src={firstimg} alt='badge' />
        <h5>Expert in React</h5>  <p>Proficient in building dynamic and interactive user interfaces using React.</p>
        </div>
        <div className="point">
        <img className='all-img' src={secondimg} alt='badge' />
          <h5>Modular Component Design</h5>  <p>Strong understanding of component-based architecture for code reusability.</p>
        </div>
        <div className="point">
        <img className='all-img' src={thirdimg} alt='badge' />
        <h5>Responsive Web Design</h5> <p> Adept at creating responsive layouts for a seamless user experience.</p>
        </div>
        {/* Add more points as needed */}
      </div>
    </div>
  )
}

export default Hireme
