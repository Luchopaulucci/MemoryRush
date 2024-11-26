import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

import Diseño from "../assets/diseño.json";

const Card = ({ matter }) => {
  const [input, setInput] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionType, setQuestionType] = useState("true_false");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    handleMatter();
  });

  function handleMatter() {
  let questions = [];
  if (matter === "Diseño") {
    questions = Diseño[questionType];
  } else {
    questions = Diseño[questionType];
  }
  setFilteredQuestions(questions || []);
} 

  let currentQuestion = filteredQuestions[currentQuestionIndex];

  function handleVerification(select, correctAnswer) {
    if (select === correctAnswer) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Su seleccion es correcta",
        showConfirmButton: false,
        timer: 900,
        backdrop: false,
      }).then(() => {
        goToNextQuestion();
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Su seleccion es incorrecta",
        showConfirmButton: false,
        timer: 900,
        backdrop: false,
      });
    }
  }

  function handleInput(userInput, correctAnswer) {
    if (userInput.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Su respuesta es correcta",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      }).then(() => {
        goToNextQuestion();
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Su respuesta es incorrecta",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
    }
  }

  function goToNextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setInput("");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Has completado todas las preguntas!",
        showConfirmButton: true,
      });
      setCurrentQuestionIndex(0);
    }
  }

  function showCorrectAnswer(correctAnswer) {
    Swal.fire({
      position: "center",
      icon: "question",
      title: "La respuesta correcta es: " + correctAnswer,
      showConfirmButton: true,
    });
  }

  return (
    <>
      <div className="max-h-max flex justify-center gap-4 my-4">
        <button
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-950 transition"
          onClick={() => {
            setQuestionType("true_false");
            setCurrentQuestionIndex(0);
          }}
        >
          Verdadero o Falso
        </button>
        <button
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-950 transition"
          onClick={() => {
            setQuestionType("complete");
            setCurrentQuestionIndex(0);
          }}
        >
          Completar
        </button>
        <button
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-950 transition"
          onClick={() => {
            setQuestionType("multiple_choice");
            setCurrentQuestionIndex(0);
          }}
        >
          Multiple Opcion
        </button>
      </div>

      {currentQuestion && (
        <div
          key={currentQuestion.id}
          className="bg-slate-950 text-white p-6 rounded-lg max-w-xl font-mono my-6"
        >
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm">Diseño Patrones</p>
          </div>
          <div className="mt-4 flex flex-col gap-5">
            <p className="text-green-400">$ {currentQuestion.type}</p>
            <p className="text-white">{currentQuestion.question}</p>
            {currentQuestion.type === "true_false" && (
              <div className="flex justify-start items-center w-full flex-row gap-2">
                <button
                  className="p-2 w-min bg-slate-700 rounded-md"
                  onClick={() =>
                    handleVerification(true, currentQuestion.correct_answer)
                  }
                >
                  Verdadera
                </button>
                <button
                  className="p-2 w-min bg-slate-700 rounded-md"
                  onClick={() =>
                    handleVerification(false, currentQuestion.correct_answer)
                  }
                >
                  Falsa
                </button>
                <button
                  className="p-2 w-max bg-slate-700 rounded-md"
                  onClick={() => goToNextQuestion()}
                >
                  Siguiente pregunta
                </button>
              </div>
            )}
            {currentQuestion.type === "complete" && (
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  className="p-2 rounded-md"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escriba su respuesta aquí en minusculas y sin acentos"
                />
                <div className="flex flex-row gap-2">
                  <button
                    className="p-2 w-max bg-slate-700 rounded-md"
                    onClick={() =>
                      handleInput(input, currentQuestion.correct_answer)
                    }
                  >
                    Verificar Respuesta
                  </button>
                  <button
                    className="p-2 w-max bg-slate-700 rounded-md"
                    onClick={() => goToNextQuestion()}
                  >
                    Siguiente pregunta
                  </button>
                  <button
                    className="p-2 w-max bg-slate-700 rounded-md"
                    onClick={() => {
                        showCorrectAnswer(currentQuestion.correct_answer),
                        goToNextQuestion();
                    }}
                  >
                    Respuesta correcta
                  </button>
                </div>
              </div>
            )}
            {currentQuestion.type === "multiple_choice" && (
              <div className="flex flex-col gap-6">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className="p-2 w-full bg-blue-600 hover:bg-blue-800 transition rounded-md"
                    onClick={() => handleVerification(option.isCorrect, true)}
                  >
                    {option.textoRespuesta}
                  </button>
                ))}
                <button
                  className="p-2 w-max mt-4 bg-slate-700 rounded-md"
                  onClick={() => goToNextQuestion()}
                >
                  Siguiente pregunta
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  matter: PropTypes.string,
};

export default Card;
