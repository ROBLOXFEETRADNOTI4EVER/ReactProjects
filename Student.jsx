import PropTypes from 'prop-types';

function Student({
    name = "Guest", 
    age = 0, 
    job = "homeless", 
    isMuslim = true
}) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Job: {job}</p>
            <p>Is muslim: {isMuslim ? "allah" : "musalah"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    job: PropTypes.string,
    isMuslim: PropTypes.bool
};

export default Student;
