import React from 'react'

const FeedBack = () => {
    return (
        <div className='p-5 w-full'>
            <input type="range" className='bg-inherit ring-2 ring-green-400 p-1 rounded-sm w-full' step={1} max={1000} />
            <div className="pt-5">
                <button>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default FeedBack