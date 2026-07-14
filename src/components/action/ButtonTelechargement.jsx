import React from 'react'

function ButtonTelechargement() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "cv/mon-cv.pdf";
    link.download = "mon-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return (
        <div>
            <button onClick={handleDownload} className='btn text-base w-[200px] font-medium p-3 bg-[#4b93ce88] rounded-md'>
                Télécharger le CV
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}

export default ButtonTelechargement