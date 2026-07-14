import React from 'react'

function ButtonRipple() {
    const handleClick = (e) => {
        const button = e.currentTarget;
        const circle = document.createElement('span');
        const rect = button.getBoundingClientRect();

        const xInside = e.clientX - rect.left;
        const yInside = e.clientY - rect.top;

        circle.classList.add('circle');
        circle.style.left = `${xInside}px`;
        circle.style.top = `${yInside}px`;

        button.appendChild(circle);
        setTimeout(() => circle.remove(), 500);
    };

    return (
        <div className='blocripple'>
            <button className="ripple" onClick={handleClick}>
                click me
            </button>
        </div>
    );
}

export default ButtonRipple