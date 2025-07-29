import FriendItem from "./FriendItem";

export default function ListOfFriends({
    friends,
    onSelectFriend,
    selectedFriend,
}) {
    return (
        <ul>
            {friends.map((friend) => (
                <FriendItem
                    key={friend.id}
                    friend={friend}
                    onSelectFriend={onSelectFriend}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
}
