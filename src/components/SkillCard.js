function SkillCard({ label, icon }) {
    return (
        <div className="flex h-24 w-24 flex-col justify-center rounded-lg bg-white   text-center shadow-lg md:h-28 md:w-28 ">
            <i className={`${icon} text-4xl md:text-6xl`}></i>
            <p className="text-1xl md:text-lg text-prose ">{label}</p>
        </div>
    );
}

export default SkillCard;
