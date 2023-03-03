
//inserting array of names
export async function getPeople(){
    const listOfNames = await fetch("http://localhost:2000/lists");
    const listAsArray= await listOfNames.json();
       
    return listAsArray;
}

