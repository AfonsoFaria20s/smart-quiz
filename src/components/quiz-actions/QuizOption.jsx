import "../../styles/pages/Quiz/QuizOption.scss"

function Option(props) {

    const opts = {
        id: props.id,
        click_event: props.onClick,
        label: props.label,
        key: props.label
    }

    return (
        <button key={opts.key} className="button-opt" id={opts.id} onClick={opts.click_event}>{opts.label} </button>
    )
}
export default Option