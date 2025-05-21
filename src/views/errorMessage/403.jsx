import Error from "./error"
const NotAuth = () => {

    return (
        <Error status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page." />
    )
}

export default NotAuth