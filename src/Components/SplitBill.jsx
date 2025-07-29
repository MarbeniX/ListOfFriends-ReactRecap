import Button from "./Button";
import { useState } from "react";

export default function SplitBill({ selectedFriend, onHandleSplitBill }) {
    const [billValue, setBillValue] = useState("");
    const [yourExpense, setYourExpense] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");
    const friendExprense = billValue ? billValue - yourExpense : "";

    function handleSubmit(e) {
        e.preventDefault();
        if (!billValue || !yourExpense) return;
        onHandleSplitBill(
            whoIsPaying === "user" ? friendExprense : -yourExpense
        );
    }
    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>Bill value</label>
            <input
                type="text"
                value={billValue}
                onChange={(e) => setBillValue(Number(e.target.value))}
            />

            <label>Your expense</label>
            <input
                type="text"
                value={yourExpense}
                onChange={(e) =>
                    setYourExpense(
                        Number(e.target.value) > billValue
                            ? yourExpense
                            : Number(e.target.value)
                    )
                }
            />

            <label>{selectedFriend.name} expenses</label>
            <input type="text" disabled value={friendExprense} />

            <label>Who is paying the bill?</label>
            <select
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split</Button>
        </form>
    );
}
