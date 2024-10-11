import PropTypes from 'prop-types';

const Title = ({title}) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center p-6">
        Cuestionario de Teoria {title}
      </h1>
      <div className="mb-8 p-6 bg-slate-950 rounded-md text-center">
        <p className="text-lg">
          Seleccione Verdadero o Falso, Complete con la palabra que falta.
        </p>
      </div>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
