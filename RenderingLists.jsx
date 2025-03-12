import React from 'react'

export default function RenderingLists() {
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
    const listitem = people.map((person) => <li key={person.id}>{person.name}</li>)
    const chemist = people.filter(personn =>personn.profession === 'chemist')
    const notchemist = people
        .filter(personnn => personnn.profession !== 'chemist')
        .map(person => <li key={person.id}>{person.name}</li>)
    
    console.log(chemist)
    const newlistitem = chemist.map((che) => {
    return <li key={che.id}>{che.name}</li>})
  return (
    <div>
 <ul>{listitem}</ul>
 <ul>CHemist : {newlistitem}</ul>
 <ul>Everyone else {notchemist}</ul>

    </div>
  )
}
