import React from 'react';
import { formatDate } from '../../utils/formatDate';

const DoctorAbout = () => {
  return (
    <div>
      <div>
        {/*-----About-----*/}
        <div>
            <h3 className="text-[20px] leading-7 text-headingColor font-bold flex items-center gap-2">
                About Of
                <span className="text-primaryColor font-bold text-[24px]">
                    Dr. Emily Rodriguez
                </span>
            </h3>

            <p className="text_para">
            Dr. Emily Rodriguez, a distinguished cardiologist, practices her healing 
            artistry at the renowned Heartwell Medical Center, situated in the bustling 
            heart of Cityville. With a stellar career spanning several decades, Dr. Rodriguez 
            has solidified her reputation as a true luminary in the field of cardiology.Her 
            specialty in the intricate domain of cardiovascular medicine has earned her widespread 
            recognition and unwavering trust among patients and peers alike. Dr. Rodriguez's 
            clinical prowess extends far beyond her impressive credentials; it is evident in 
            the compassionate care she provides to each individual under her watchful eye. Patients 
            can rest assured that they are in the hands of a physician who combines cutting-edge medical 
            knowledge with a deeply empathetic approach.
            </p>
        </div>

        {/*-----Education-----*/}
        <div className="mt-[40px]">
            <h3 className="text-[20px] leading-7 text-headingColor font-bold flex items-center gap-2">
                Education
            </h3>

            <ul className="pt-4 md:p-3">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-3 mb-7">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-bold">
                            {formatDate('09-21-2023')} - {formatDate('09-21-2023')}
                        </span>
                        <p className="text-[16px] leading-6 font-normal text-textColor">
                            PHD in Cardiologist
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-semibold text-textColor">
                        Silver Crest Hospital, Sri Lanka.
                    </p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-3 mb-7">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-bold">
                            {formatDate('09-21-2023')} - {formatDate('09-21-2023')}
                        </span>
                        <p className="text-[16px] leading-6 font-normal text-textColor">
                            PHD in Cardiologist
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-semibold text-textColor">
                        Silver Crest Hospital, Sri Lanka.
                    </p>
                </li>
            </ul>
        </div>

        {/*-----Experience-----*/}
        <div className="mt-[40px]">
            <h3 className="text-[20px] leading-7 text-headingColor font-bold flex items-center gap-2">
                Experience
            </h3>

            <ul className="grid sm:grid-cols-2 gap-7 pt-4 md:p-5">
                <li className="p-4 rounded-[10px] bg-yellowColor ">
                    <span className="text-purpleColor text-[16px] leading-7 font-bold">
                        {formatDate('09-21-2023')} - {formatDate('09-21-2023')}
                    </span>
                    <p className="text-[15px] leading-5 font-normal text-textColor">
                        Cardiologist
                    </p>
                    <p className="text-[14px] leading-5 font-semibold text-textColor">
                        Silver Crest Hospital, Sri Lanka.
                    </p>
                </li>

                <li className="p-4 rounded-[10px] bg-yellowColor ">
                    <span className="text-purpleColor text-[16px] leading-7 font-bold">
                        {formatDate('09-21-2023')} - {formatDate('09-21-2023')}
                    </span>
                    <p className="text-[15px] leading-5 font-normal text-textColor">
                        Cardiologist
                    </p>
                    <p className="text-[14px] leading-5 font-semibold text-textColor">
                        Silver Crest Hospital, Sri Lanka.
                    </p>
                </li>
            </ul>
        </div>


    </div>
    </div>
  );
}

export default DoctorAbout;
