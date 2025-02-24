import { BsEmojiLaughing } from "react-icons/bs";
import './EmptyList.css';

function EmptyList() {
    return (
        <div className="empty-list">
            <h2>No items in the list</h2>
            <BsEmojiLaughing />
            <p>There are no items in the list, add a new one</p>
        </div>
    );
}

export { EmptyList };