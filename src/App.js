import { useState } from "react";
import AddFriendForm from "./Components/AddFriendForm";
import Button from "./Components/Button";
import ListOfFriends from "./Components/ListOfFriends";
import SplitBill from "./Components/SplitBill";
import { initialFriends } from "./data";

export default function App() {
    const [showAddFriendForm, setShowAddFriendForm] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleSetShowAddFriendForm() {
        setShowAddFriendForm((prev) => !prev);
    }
    function handleAddFriend(newFriend) {
        setFriends((prev) => [...prev, newFriend]);
        setShowAddFriendForm((prev) => !prev);
    }
    function handleSelectFriend(friend) {
        setSelectedFriend((prev) => (prev === friend ? null : friend));
        setShowAddFriendForm(false);
    }
    return (
        <div className="app">
            <div className="sidebar">
                <ListOfFriends
                    friends={friends}
                    onSelectFriend={handleSelectFriend}
                    selectedFriend={selectedFriend}
                />
                {showAddFriendForm && (
                    <AddFriendForm onAddFriend={handleAddFriend} />
                )}
                <Button onClick={handleSetShowAddFriendForm}>
                    {showAddFriendForm ? "Close" : "Add friend"}
                </Button>
            </div>

            {selectedFriend && <SplitBill selectedFriend={selectedFriend} />}
        </div>
    );
}
