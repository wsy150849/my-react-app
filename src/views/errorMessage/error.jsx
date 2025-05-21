import './index.scss'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const Error = ({status,title,subTitle}) => {
    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate('/home/index')
    }

    return (
        <Result
            status={status}
            title={title}
            subTitle={subTitle}
            extra={
                <Button type="primary" onClick={handleGoHome}>
                    Back Home
                </Button>
            }
        />
    )
}

export default Error