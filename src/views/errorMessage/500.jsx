import Error from "./error"

const NotNetwork = () => {

    return (
        <Error
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
        />
    )
}

export default NotNetwork