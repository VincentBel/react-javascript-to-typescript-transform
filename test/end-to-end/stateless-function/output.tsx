type HelloProps = {
    message?: string;
};
var Hello: React.StatelessComponent<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
