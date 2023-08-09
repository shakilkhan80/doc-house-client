import React from 'react';

const DocTab = ({ doctor }) => {

    const { name, price, rating, profession, service, address, _id, image } = doctor;

    return (
        <div>
            <div>
                <div>
                    <img className='w-[300px] h-[350px]' src={image} alt="" />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default DocTab;