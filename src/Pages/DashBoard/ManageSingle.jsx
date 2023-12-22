import React from 'react';

const ManageSingle = ({task}) => {
    return (
        <div>
     <h3 class="mb-4 text-black text-[22px] sm:text-[40px] font-extrabold leading-none ">
     <span>{task.TaskName} </span>
 </h3>
 <p>{task.TaskDescription}</p>
     </div>
    );
};

export default ManageSingle;