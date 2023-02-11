import { CButton } from '@coreui/react';
import React, { useState } from 'react';

const FeedBack = () => {
    const [rangeValue, setRangeValue] = useState(0);

    // useEffect(() => {
    //     console.log("rangeValue::", rangeValue);

    // }, [rangeValue]);

    return (
        <div className='p-5 w-full'>

            <div className="py-1.5">Please rate your experience with us:</div>

            <input type="range" className='bg-inherit p-1 rounded-sm w-[400px]' step={1} max={1000} value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />

            <div className="py-0.5">You Rating: <span className='text-2xl font-semibold pl-2 text-orange-400'>{parseInt(rangeValue / 100)} / 10</span></div>

            <div className="pt-2.5">
                <CButton color="info" onClick={() => console.log("rangeValue::", rangeValue)}>Submit</CButton>
            </div>
        </div>
    )
}

export default FeedBack