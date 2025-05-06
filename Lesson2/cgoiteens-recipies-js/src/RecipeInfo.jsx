export default function RecipeInfo({icon,text}){
    return (
        <>
        <div className="recipe-info">
            <img src={icon} alt="icon" />
            <p>{text}</p>
        </div>
        </>
    )
}