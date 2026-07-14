import React, { useState } from 'react'
import { FiCamera, FiHome, FiMessageSquare, FiSettings, FiUser } from 'react-icons/fi'


function Navigation() {
    const [activeIndex, setActiveIndex] = useState(0);
  const items =[{id: 0, menu:'Home', icon: <FiHome />}, {id: 1, menu:'Profil', icon: <FiUser />}, {id: 2, menu:'Messages', icon: <FiMessageSquare />}, {id: 3, menu:'Photos', icon: <FiCamera />}, {id: 4, menu:'Settings', icon: <FiSettings />}];
    return (
        <div className='blocnavigation'>
            <div className='navigation'>
                <ul>
                    {
                        items.map((item, index)=>(
                    <li key={item.id} className={index === activeIndex ? 'active' : ''}>
                        <a onClick={() => setActiveIndex(index)} href="#">
                            <span className='iconItem'>{item.icon}</span>
                            <span className='text'>{item.menu}</span>
                        </a>
                    </li>
                        ))
                    }
                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    )
}

export default Navigation