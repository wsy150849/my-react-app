import Error from "./error"

const NotFound  = () => {
    return (
        <Error
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
        />
    )
}

export default NotFound