import PropTypes from "prop-types";

const Complete = ({ question, input, setInput, handleInput, showCorrectAnswer, goToNextQuestion }) => (
  <div className="flex flex-col gap-4">
    <input
      type="text"
      className="p-2 rounded-lg"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Escribe tu respuesta aquí"
    />
    <div className="flex flex-row gap-6">
      <button className="p-2 w-max" onClick={() => handleInput(input, question.correct_answer)}>
        Verificar Respuesta
      </button>
      <button className="p-2 w-max" onClick={goToNextQuestion}>
        Siguiente pregunta
      </button>
      <button className="p-2 w-max" onClick={() => showCorrectAnswer(question.correct_answer)}>
        Respuesta correcta
      </button>
    </div>
  </div>
);

Complete.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
  }).isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  showCorrectAnswer: PropTypes.func.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
};

export default Complete;
