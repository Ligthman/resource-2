"use client";
import { useState, useMemo } from "react";

const C = {
  yellow: "#F5C518",
  bg: "#F7F7F3",
  white: "#fff",
  text: "#1A1A1A",
  muted: "#777",
  line: "#e5e5e5",
  green: "#2F9E65",
  red: "#D94A3D",
  orange: "#F07C2A",
};

const questions = [
  { id: "year", q: "Mikor épült?", opts: ["1960 előtt","1960–2000","2000 után"] },
  { id: "insulation", q: "Van szigetelés?", opts: ["Nincs","Közepes","Jó"] },
  { id: "windows", q: "Milyenek az ablakok?", opts: ["Régiek","Közepes","Újak"] },
  { id: "electricity", q: "Villanyszámla?", opts: ["alacsony","közepes","magas"] },
  { id: "roof", q: "Van jó tető?", opts: ["igen","nem"] },
];

function getDiagnosis(a:any){
  if(a.insulation==="Nincs" || a.windows==="Régiek"){
    return {
      title:"Hőveszteség a fő probléma",
      first:"Szigetelés + ablakcsere",
      avoid:"Ne vegyél még napelemet",
    }
  }
  if(a.roof==="igen" && a.electricity==="magas"){
    return {
      title:"Napelem a legjobb lépés",
      first:"Napelemes rendszer",
      avoid:"Ne méretezz rosszul",
    }
  }
  return {
    title:"Optimalizálás szükséges",
    first:"Mérés + tervezés",
    avoid:"Ne ugorj nagy beruházásba",
  }
}

export default function App(){
  const [step,setStep]=useState(0)
  const [answers,setAnswers]=useState<any>({})
  const [done,setDone]=useState(false)

  const diag = useMemo(()=>getDiagnosis(answers),[answers])

  if(done){
    return(
      <div style={{padding:20}}>
        <h2>{diag.title}</h2>
        <p><b>Ezzel kezdd:</b> {diag.first}</p>
        <p><b>Ne csináld:</b> {diag.avoid}</p>
        <button onClick={()=>location.reload()}>Újra</button>
      </div>
    )
  }

  const q=questions[step]

  return(
    <div style={{padding:20}}>
      <h3>{q.q}</h3>
      {q.opts.map(o=>(
        <button key={o}
          onClick={()=>{
            const a={...answers,[q.id]:o}
            setAnswers(a)
            if(step===questions.length-1) setDone(true)
            else setStep(step+1)
          }}
          style={{display:"block",margin:5}}
        >{o}</button>
      ))}
    </div>
  )
}