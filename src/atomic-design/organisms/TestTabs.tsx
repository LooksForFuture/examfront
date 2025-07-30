import { useQuery } from "@tanstack/react-query"
import TestCard from "atomic-design/modules/TestCard"
import { TestService } from "types"

const TestResults = ({ data }: any) => {
  return <>
    {data?.test_result_list && data?.test_result_list?.length > 0 ? (
      <div className="row">
        <div className="col-md-12">
          <h4>تاریخچه آزمون های شرکت کرده</h4>
        </div>
        {/* @ts-ignore */}
        {data?.test_result_list.filter(result => result.test.status === 'finished')?.map((result: any, index: number) => (
          <div key={index} className="col-md-12">
            <div className="col-md-4 mb-4">
              <TestCard test={result.test} />
            </div>
          </div>
        ))}
      </div>
    ) : null}
  </>
}

const Tests = ({ data }: any) => {
  return <>
    {data?.test_result_list && data?.test_result_list?.length > 0 ? (
      <div className="row">
        <div className="col-md-12">
          <h4>آزمون های فعال</h4>
        </div>
        {/* @ts-ignore */}
        {data?.test_result_list.filter(result => result.test.status !== 'finished')?.map((result: any, index: number) => (
          <div className="col-md-12" key={index}>
            <div className="col-md-4 mb-4">
              <TestCard test={result.test} />
            </div>
          </div>
        ))}
      </div>
    ) : null}
  </>
}

const TestTabs = () => {
  const { testProfileMeRead } = TestService
  const { data, isLoading, error } = useQuery({
    queryKey: ['testProfileMeRead'],
    queryFn: testProfileMeRead
  })


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
        <Tests data={data} />
      </div>
      <div className="tab-pane fade" id="navs-pills-top-profile" role="tabpanel">
        <TestResults data={data} />
      </div>
    </div>
  </div>
}

export default TestTabs