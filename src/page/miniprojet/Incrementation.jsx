import React, { useEffect, useState } from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

function Incrementation() {
    const target = [
    { id: 0, title: "Twitter Followers", nbr: 12000, start: 0, icon: <FaTwitter /> },
    { id: 1, title: "YouTube Subscribers", nbr: 5000, start: 0, icon: <FaYoutube /> },
    { id: 2, title: "Facebook Fans", nbr: 7500, start: 0, icon: <FaFacebook /> },
  ];

  const [count, setCount] = useState(target);

  useEffect(() => {
    count.forEach((item, i) => {
      let start = 0;
      const end = item.nbr;
      const increment = end / 200;

      const update = () => {
        start += increment;
        if (start < end) {
          setCount((prev) =>
            prev.map((el, index) =>
              index === i ? { ...el, start: Math.ceil(start) } : el
            )
          );
          requestAnimationFrame(update);
        } else {
          setCount((prev) =>
            prev.map((el, index) =>
              index === i ? { ...el, start: end } : el
            )
          );
        }
      };

      update();
    });
  }, []);
    
    return (
        <div className='bloc-counter flex-wrap'>
            {
                count.map((item) => (
                    <div key={item.id} className="counter-container">
                        <span className='text-2xl'>{item.icon}</span>
                        <div className="incre">{item.start}</div>
                        <span>{item.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Incrementation