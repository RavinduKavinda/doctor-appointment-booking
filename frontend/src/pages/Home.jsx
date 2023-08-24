import React from 'react'

const Home = () => {
  return <>
  {/*description*/}
  <section className="description pt=[60px] 2xl:h-[800px]">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
        {/*content*/}
        <div>
          <div className="lg:w-[768px]">
            <h1 className="text-[35px] leading-[45px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
              Facilitate Easy and Efficient Appointment Booking For Patients.
            </h1>
            <p className="text_para">
            To simplify the process of booking medical appointments for patients by providing a user-friendly online platform.
            This aims to enhance patient convenience, reduce administrative burdens on healthcare providers, and ultimately improve
             the overall efficiency and accessibility of healthcare services.
            </p>

            <button className="btn">Request an Appointment</button>

          </div>
        </div>
      </div>
    </div>

  </section>


  </>
}

export default Home