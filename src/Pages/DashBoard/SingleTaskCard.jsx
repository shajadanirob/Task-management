

const SingleTaskCard = ({task}) => {
    return (
        <div>
           <div class="sm:first:col-span-2 py-14 px-11 rounded-lg max-w-[312px] bg-[#FFE8D2]" >
    <h3 class="mb-4 text-black text-[22px] sm:text-[40px] font-extrabold leading-none">
        <span>{task.TaskName} </span>
    </h3>
    <div class="text-lg text-black leading-[1.8]">
        <p>{task.TaskDescription}</p>
    </div>
  
</div> 
        </div>
    );
};

export default SingleTaskCard;