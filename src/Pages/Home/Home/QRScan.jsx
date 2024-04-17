import React from 'react';
import QRScanCard from './../../../Components/QRScanCard';

const QRScan = () => {
    return (
        <div className='grid grid-cols-3'> 
            <QRScanCard title='One Click' img='../../../../public/Resourcess/icon/click (1) 1.png' description='QR virification system'></QRScanCard>
            <QRScanCard title='One Click' img='../../../../public/Resourcess/icon/click (1) 1.png' description='QR virification system'></QRScanCard>
            <QRScanCard title='One Click' img='../../../../public/Resourcess/icon/click (1) 1.png' description='QR virification system'></QRScanCard>
        </div>
    );
};

export default QRScan;