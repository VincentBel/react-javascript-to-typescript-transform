type HelloProps = {
    message?: string;
};
var Hello: React.StatelessComponent<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
Hello.propTypes = {
    message: React.PropTypes.string,
};
