import { ReactElement } from 'react'
import { useAuth } from '../../hooks/AuthProvider'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({
    childRoute
} : {
    childRoute: ReactElement
}) => {
    const navigate = useNavigate()
    const { username } = useAuth()

    if (!username) {
        return <button
            onClick={() => navigate('/login')}
            >
                Login to View This Page
            </button>
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '100%',
                margin: '1rem auto'
            }}
        >
            {childRoute}
        </div>
    )
}

export default ProtectedRoute