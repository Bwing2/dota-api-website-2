import { questionAnswer } from "./QAArray";

export default function AboutMap() {
  return (
    <div className="about-container">
      {questionAnswer.map((content, index) => (
        <div key={index} className="question-answer-div">
          <div className="question">Q: {content.question}</div>
          <div className="answer">A: {content.answer}</div>
          {content.image && (
            <div className="about-img">
              <img src={content.image} alt={content.question} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
