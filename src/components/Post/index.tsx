import { useParams, useSearchParams } from 'react-router-dom'
import './style.css'

export const Post = () => {
    const params = useParams()
    const {id} = params
    const [qs] = useSearchParams()

    return (
        <div>
            <h1>Post {`id ${id}`} {`QS ${qs.get('page')}`} {`QS segundo ${qs.get('segundo')}`}</h1>
        </div>
    )
}