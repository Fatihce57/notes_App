import React from 'react'
import '../css/SideBar.css'
import { BiCommentAdd } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri'

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}><BiCommentAdd /></button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            key={id}
            className={`app-sidebar-note ${id === activeNote && 'active'}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}><RiDeleteBinLine/></button>
            </div>

            <p>{body && body.substr(0, 100) + '...'}</p>
            <small className="note-meta">
              Last Modified:{' '}
              {new Date(lastModified).toLocaleDateString('en-DE', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
