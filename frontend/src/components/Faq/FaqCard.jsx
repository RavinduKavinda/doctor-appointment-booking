import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FaqCard = ({ item }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
            setIsOpen(!isOpen);
        };

    return (
        <div className="p-2 lg:p-4 rounded-[12px] border-[3px] border-solid border-blue-400
         ml-[20px] lg:ml-[40px] mr-[20px] lg:mr-[40px] mb-3 cursor-pointer bg-blue-50">
            <div className="flex items-center justify-between gap-6"
                onClick={toggle}>

                <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
                    {item.question}
                </h4>
            <div
                className={`${
                    isOpen && "bg-primaryColor text-white border-none"}
                    w-6 h-6 lg:w-8 lg:h-8 border border-solid border-blue-400 rounded flex items-center justify-center`}>
                    {isOpen? <AiOutlineMinus />: <AiOutlinePlus />}
             </div>
            </div>

            {isOpen &&  (
                <div className="mt-4">
                    <p className="text-[14px] lg:text-[16px] leading-6 lg:leading-7 font-[400] text-textColor">
                        {item.content}
                    </p>
                </div>
            )}
        </div>
      );
    }

export default FaqCard;
