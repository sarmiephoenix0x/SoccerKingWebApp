export default function QuestionsCard(props) {
    return (
        <>
            <div id="QuestionsCard">
            <img id="QuestionsCardImg" src={props.img} alt="QuestionsCardImg" />
                <div id="QuestionsCardBody">
                    {props.content}
                </div>
            </div>
        </>
    )
}