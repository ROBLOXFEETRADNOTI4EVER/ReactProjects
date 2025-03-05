function List(){
    const fruits = [
        {id: 1,name: "Banana", calories: 95},
        {id: 2,name: "Apple", calories:74},
        {id: 3,name: "Orange",calories: 45},
        {id: 4,name:"Coconut",calories:155},
        {id: 5,name: "Pinapple",calories:39}];
    // fruits.sort((a,b) =>a.name.localeCompare(b.name)) normal sort
    // fruits.sort((a,b) =>b.name.localeCompare(a.name)) // reverse sort
    // fruits.sort((a,b) => a.calories -b.calories) // Numeric order
    // fruits.sort((a,b) => b.calories - a.calories) // reverse numeric order highest on top
    // const lowCalFruits = fruits.filter((i) => i.calories < 100);
    const  highcalroiefrt = fruits.filter((i) => i.calories >= 100);
    const listitems = highcalroiefrt.map(highcalroiefr => <li key={highcalroiefr.id}>{highcalroiefr.name} &nbsp; <b>{highcalroiefr.calories}</b></li>)
    return(<ul>{listitems}</ul>)
}

export default List