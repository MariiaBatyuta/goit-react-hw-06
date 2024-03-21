import css from "./DeleteButton.module.css"

export default function DeleteButton({ onClick, dataId }) {
    return (
        <button type="button" className={css.button} onClick={onClick} data-id={dataId}>Delete</button>
    )
}