import PropTypes from "prop-types";

const TrueFalse = ({ question, handleVerification, goToNextQuestion }) => (
  <div className="flex justify-start items-center w-full flex-row gap-5">
    <button
      className="p-2 w-min"
      onClick={() => handleVerification(true, question.correct_answer)}
    >
      Verdadera
    </button>
    <button
      className="p-2 w-min"
      onClick={() => handleVerification(false, question.correct_answer)}
    >
      Falsa
    </button>
    <button className="p-2 w-max" onClick={goToNextQuestion}>
      Siguiente pregunta
    </button>
  </div>
);

TrueFalse.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.bool.isRequired,
  }).isRequired,
  handleVerification: PropTypes.func.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
};

export default TrueFalse;
