import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className="card">            
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "True" : "False"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
};

export default Student;
