import PropTypes from "prop-types";

const QuestionButtons = ({ onSelectType }) => (
    <div className="max-h-max flex justify-center gap-4 my-4">
      <button className="p-2 rounded-lg" onClick={() => onSelectType("true_false")}>
        Verdadero o Falso
      </button>
      <button className="p-2 rounded-lg" onClick={() => onSelectType("complete")}>
        Completar
      </button>
      <button className="p-2 rounded-lg" onClick={() => onSelectType("multiple_choice")}>
        Multiple Opcion
      </button>
    </div>
  );

  QuestionButtons.propTypes = {
    onSelectType: PropTypes.func.isRequired,  // Validación para asegurar que onSelectType es una función y es requerida
  };
  
  export default QuestionButtons;
  