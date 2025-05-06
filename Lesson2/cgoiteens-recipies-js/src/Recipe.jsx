import RecipeInfo from "./RecipeInfo"
export default function Recipe({recipe}) {
const {name, time, servings, calories, difficulty, image} = recipe

    return (
        <>
        <h1>Hello</h1>
        <p>{name}</p>
        <img src={image} alt="image" />
        <RecipeInfo text={time}/>
        <RecipeInfo text={servings}/>
        <RecipeInfo text={calories}/>
        <RecipeInfo text={difficulty}/>
        </>
    )
}