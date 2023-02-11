import { CButton } from '@coreui/react';
import React, { useState } from 'react';

const FeedBack = () => {
    const [rangeValue, setRangeValue] = useState(0);
    const [commentValue, setCommentValue] = useState("");

    return (
        <form onSubmit={(e) => e.preventDefault()} className='p-5 w-full'>

            <div className="py-1.5">Please rate your experience with us:</div>

            <input required={true} type="range" className='bg-inherit p-1 rounded-sm w-[400px]' step={1} max={1000} value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />

            <div className="py-0.5">You Rating: <span className='text-2xl font-semibold pl-2 text-orange-400'>{parseInt(rangeValue / 100)} / 10</span></div>

            <div className="pt-2 5">
                <textarea
                    required={true}
                    placeholder='Put your experience in detailed words here..'
                    className='bg-inherit p-1.5 rounded-sm w-[400px] ring-2 ring-white'
                    rows='4'

                    value={commentValue}
                    onChange={(e) => setCommentValue(e.target.value)}
                />
            </div>

            <div className="pt-2.5">
                <CButton color="info" onClick={() => console.log("rangeValue::", rangeValue)} type='submit'>Submit</CButton>
            </div>
        </form>
    )
}

export default FeedBack