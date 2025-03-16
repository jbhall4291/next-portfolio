function SkillCard({ label, icon }) {
    return (
        <div className="card flex h-24 w-24 flex-col justify-center rounded-lg bg-white  border border-black-300  text-center md:h-28 md:w-28 shadow-[0_2px_2px_rgba(0,0,0,0.15)]">
            <i className={`${icon} text-4xl md:text-6xl pb-2`}></i>
            <p className="text-1xl md:text-lg text-prose ">{label}</p>


        </div>




    );
}

export default SkillCard;
