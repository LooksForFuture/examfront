import { Link } from "react-router-dom"
import { ManagerTest } from "types"

type TestCardProps = {
  test: ManagerTest
}

const TestCard = ({ test }: TestCardProps) => {

  const getButton = () => {
    if (test.status === ManagerTest.status.ACTIVE) {
      return <Link to={`/exam/${test.id}`} className="btn btn-success w-100">ورود به آزمون</Link>
    } else if (test.status === ManagerTest.status.FINISHED) {
      return <Link to={`/exam/${test.id}/result`} className="btn btn-secondary w-100">مشاهده نتایج</Link>
    } else if (test.status === ManagerTest.status.INACTIVE) {
      return <div className="btn btn-success disabled w-100">شروع نشده</div>
    }
  }

  return <div className="card">
    <div className="card-body">
      <div className="h5">{test.title}</div>
      {getButton()}
    </div>
  </div>
}
export default TestCard