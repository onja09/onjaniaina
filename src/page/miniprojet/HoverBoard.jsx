import React from 'react'

function HoverBoard() {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    const SQUARES = 500;

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className="blocContainerBoard">
            <div className="containerboard">
                {Array.from({ length: SQUARES }).map((_, i) => (
                    <div
                        key={i}
                        className="square"
                        onMouseOver={(e) => {
                            const color = getRandomColor();
                            e.target.style.background = color;
                            e.target.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`;
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = '#1d1d1d';
                            e.target.style.boxShadow = '0 0 4px #000';
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default HoverBoard