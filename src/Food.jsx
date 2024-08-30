function Food() {

    const food_1 = "apple";
    const food_2 = "banana";

    return (
        <ul>
            <li>Apple</li>
            <li>{food_1}</li>
            <li>{food_2.toUpperCase()}</li>            
        </ul>
    );
}

export default Food