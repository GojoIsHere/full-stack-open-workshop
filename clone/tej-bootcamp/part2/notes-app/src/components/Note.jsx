const Note = ({ note, updateNote }) => {
  return (
    <li className="note">
      <span> {note.content}</span>
      <button onClick={updateNote}>
        change {note.important ? "true" : "false"}
      </button>
    </li>
  );
};

export default Note;
