type HelloProps = {
    message?: string;
};
var Hello: React.SFC<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
