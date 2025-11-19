import { useState } from "react"

export default function Player({ initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function actionBtn() {
        setIsEditing((editing) => !editing); 
        // best practice to update base state to previous state (param editing its up to you the value is same with isEditing true or false)
    }

    // param event its special feature from onChange props on input component it automatically passing the value
    function handleChangeInput(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName =  <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handleChangeInput}/>
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={actionBtn}>{isEditing ? "Save" : "Edit"}</button>
            </span>
        </li>
    );
}