import PropTypes from "prop-types";

const MultipleChoice = ({ question, handleVerification, goToNextQuestion }) => (
  <div className="flex flex-col gap-4">
    {question.options.map((option, index) => (
      <button
        key={index}
        className="p-2 w-full text-left"
        onClick={() => handleVerification(option.isCorrect, true)}
      >
        {option.textoRespuesta}
      </button>
    ))}
    <button className="p-2 w-max" onClick={goToNextQuestion}>
      Siguiente pregunta
    </button>
  </div>
);

MultipleChoice.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        textoRespuesta: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
  handleVerification: PropTypes.func.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
};

export default MultipleChoice;
