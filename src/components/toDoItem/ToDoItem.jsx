import styles from "./ToDoItem.module.scss";
import DeleteModal from "../deleteModal/DeleteModal";
import EditModal from "../editModal/EditModal";
import { useDispatch } from "react-redux";
import {
  deleteToDo,
  editToDoName,
  changeCheck,
} from "../../store/slices/toDoSlice";
import { useState } from "react";

export default function ToDoItem({ toDoItemData }) {
  const [seeDeletModal, setSeeDeletModal] = useState(false);
  const [seeEditModal, setSeeEditModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className={[styles.wr_toDoItem, "flex_between"].join(" ")}>
        <input
          type="checkbox"
          defaultChecked={toDoItemData.checked}
          onChange={() => {
            dispatch(changeCheck(toDoItemData.id));
          }}
        />
        <p>{toDoItemData.name}</p>
        <div className="flex_center">
          <button
            className="flex_center br_outline_none"
            onClick={() => {
              setSeeEditModal(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            >
              <g dataname="Layer 2">
                <path
                  d="M19.4 7.34 16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68 13.32 8l1.95-2L18 8.73z"
                  dataname="edit"
                />
              </g>
            </svg>
          </button>
          <button
            className="flex_center br_outline_none"
            onClick={() => {
              setSeeDeletModal(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 29 29"
            >
              <path d="M19.795 27H9.205a2.99 2.99 0 0 1-2.985-2.702L4.505 7.099A.998.998 0 0 1 5.5 6h18a1 1 0 0 1 .995 1.099L22.78 24.297A2.991 2.991 0 0 1 19.795 27zM6.604 8 8.21 24.099a.998.998 0 0 0 .995.901h10.59a.998.998 0 0 0 .995-.901L22.396 8H6.604z" />
              <path d="M26 8H3a1 1 0 1 1 0-2h23a1 1 0 1 1 0 2zM14.5 23a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1zM10.999 23a1 1 0 0 1-.995-.91l-1-11a1 1 0 0 1 .905-1.086 1.003 1.003 0 0 1 1.087.906l1 11a1 1 0 0 1-.997 1.09zM18.001 23a1 1 0 0 1-.997-1.09l1-11c.051-.55.531-.946 1.087-.906a1 1 0 0 1 .905 1.086l-1 11a1 1 0 0 1-.995.91z" />
              <path d="M19 8h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-8-2h7V4h-7v2z" />
            </svg>
          </button>
        </div>
      </div>
      {seeEditModal ? (
        <EditModal
          name={toDoItemData.name}
          closeModal={() => setSeeEditModal(false)}
          edit={(toDoName) => {
            dispatch(editToDoName({ id: toDoItemData.id, name: toDoName }));
            setSeeEditModal(false);
          }}
        />
      ) : null}
      {seeDeletModal ? (
        <DeleteModal
          name={toDoItemData.name}
          closeModal={() => setSeeDeletModal(false)}
          deleteToDo={() => dispatch(deleteToDo(toDoItemData.id))}
        />
      ) : null}
    </>
  );
}
