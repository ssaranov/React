import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <div className="alert-danger">
        <h2>404 - старница не найдена</h2>
        <p>Страница которую вы хотите просмотреть не существует</p>


        <Link className="btn btn-primary" to="/">
        На главную</Link>

    </div>
  )
}
export default NotFoundPage