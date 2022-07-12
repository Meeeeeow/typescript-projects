import React , { useEffect } from 'react'
import { noteProps } from '../interfaces/noteTypes';
import NoteCard from './noteCard';
type noteListProps ={
    notes : noteProps[],
    setNotes : React.Dispatch<React.SetStateAction<noteProps[]>>
}
const NotesList = ({notes , setNotes} : noteListProps) => {
  const handleClick = (id : string) =>{
    console.log(id);
    setNotes(notes.filter(note=> note.id !== id));
  }
  useEffect(()=>{
    localStorage.setItem("AddedNotes" , JSON.stringify(notes));
  },[notes])
  
  return (
    <div className='mt-5'>
        {
          notes.map(note=>(
            <NoteCard key = {note.id} note = {note} handleDelete = { handleClick } setNotes = {setNotes} notes = { notes }/>
          ))
        }
    </div>
  )
}

export default NotesList