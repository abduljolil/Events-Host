import React from 'react';

const QRScanCard = ({img,title,description}) => {
    return (
        <div className="card w-96 bg-slate-200  ">
        <div className="card-body">
            <img className='w-10 h-10 bg-base-200 rounded-full p-2' src={img} alt=""  />
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
         
        </div>
      </div>
    );
};

export default QRScanCard;