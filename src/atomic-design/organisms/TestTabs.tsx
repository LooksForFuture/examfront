import { useQuery } from "@tanstack/react-query"
import TestCard from "atomic-design/modules/TestCard"
import { ApiError, ManagerTest, MyUserTestResultTest, TestService, UserProfile } from "types"

type TestResultsPropsType = {
  data: UserProfile | undefined
}

const TestResults = ({ data }: TestResultsPropsType) => {
  const finishedTests = data?.test_result_list?.filter(result => result.test?.status === MyUserTestResultTest.status.FINISHED)

  return <>
    {data?.test_result_list && finishedTests && finishedTests?.length > 0 ? (
      <div className="row">
        {finishedTests?.map((result: any, index: number) => (
          <div key={index} className="col-md-4 mb-4">
            <TestCard test={result.test} />
          </div>
        ))}
      </div>
    ) : <h6 className="mt-2 text-center">آزمون فعالی وجود ندارد</h6>
    }
  </>
}

type TestsPropsType = {
  data: Array<ManagerTest> | undefined
}

const Tests = ({ data }: TestsPropsType) => {
  return <>
    {data && data?.length > 0 ? (
      <div className="row">
        {data?.map((result, index) => (
          <div key={index} className="col-md-4 mb-4">
            <TestCard test={result} />
          </div>
        ))}
      </div>
    ) : <h6 className="mt-2 text-center">آزمون فعالی وجود ندارد</h6>
    }
  </>
}

const TestTabs = () => {
  const { testProfileMeRead } = TestService
  const { data, isLoading, error } = useQuery({
    queryKey: ['testProfileMeRead'],
    queryFn: testProfileMeRead
  })

  const { testTestList } = TestService
  const { data: dataTestList, isLoading: isLoadingTestList, error: errorTestList } = useQuery<any, ApiError, Array<ManagerTest>>({
    queryKey: ['testTestList'],
    queryFn: ({ queryKey }) => testTestList('active')
  })
  
  // TODO: Avoid this
  // dataTestList[0].question_set

  return <div className="nav-align-top mb-4">
    <ul className="nav nav-pills mb-3" role="tablist">
      <li className="nav-item" role="presentation">
        <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-home" aria-controls="navs-pills-top-home" aria-selected="true">
          آزمون‌ها
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button type="button" className="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-profile" aria-controls="navs-pills-top-profile" aria-selected="false" tabIndex={-1}>
          نتایج
        </button>
      </li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane fade active show" id="navs-pills-top-home" role="tabpanel">
        <Tests data={dataTestList} />
      </div>
      <div className="tab-pane fade" id="navs-pills-top-profile" role="tabpanel">
        <TestResults data={data} />
      </div>
    </div>
  </div>
}

export default TestTabs