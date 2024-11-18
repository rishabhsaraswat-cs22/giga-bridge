import { HashLoader } from 'react-spinners'

export default function Loading() {
    return (
        <div className="loading-spinner">
            <HashLoader
                color="#4A90E2"
                size={100}
                speedMultiplier={1.5}
            />
        </div>
    )
}
