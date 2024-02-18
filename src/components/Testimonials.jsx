import React from 'react'
import ReviewCard from './ReviewCard'

function Testimonials() {
    return (

        <div className="lg:px-12 px-4 bg-bgShade my-32" id="testimonials">
            <div className="text-headingColor mb-20">
                <p className="text-xl font-semibold mb-5">Clients Feedback</p>
                <h2 className="md:text-5xl text-4xl font-bold">Customer testimonials</h2>
            </div>

            {/* customer reviews  */}
            <ReviewCard />
        </div>

    )
}

export default Testimonials
