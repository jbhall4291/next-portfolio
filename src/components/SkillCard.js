function SkillCard({ label, icon }) {
    return (
        <div className="flex h-24 w-24 flex-col justify-center rounded-lg bg-white  text-center shadow-2xl md:h-28 md:w-28 ">
            <i className={`${icon} text-4xl md:text-6xl`}></i>
            <p className="text-1xl pt-1 md:text-lg ">{label}</p>
        </div>
    );
}

export default SkillCard;
