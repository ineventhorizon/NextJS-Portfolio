import { firestore  } from "./firebase";

var projects = []

const getProjects = async ()=>{
    const snapshot = await firestore.collection("projects").get();
    snapshot.docs.forEach((doc)=>{
        projects.push(doc.data())
        console.log(doc.data())
    })
    
}

export {getProjects, projects}