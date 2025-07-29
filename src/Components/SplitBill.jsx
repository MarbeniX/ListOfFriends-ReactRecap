import Button from "./Button";

export default function SplitBill({ selectedFriend }) {
    return (
        <form className="form-split-bill">
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>Bill value</label>
            <input type="texst" />

            <label>Your expense</label>
            <input type="texst" />

            <label>{selectedFriend.name} expenses</label>
            <input type="texst" disabled />

            <label>Who is paying the bill?</label>
            <select>
                <option value="user">You</option>
                <option value="friend">Friend</option>
            </select>

            <Button>Split</Button>
        </form>
    );
}
