
const Test = () => {
    return (
        <Link to={"/auth/login"}>
        <button onClick={handleLogOut} className="btn">Logout</button>
    </Link>
    );
};

export default Test;