import { useMutation, useQuery } from "@tanstack/react-query";
import Spinner from "atomic-design/atoms/Spinner";
import Wating from "atomic-design/atoms/Wating";
import WithoutVerticalMenuLayout from "atomic-design/layouts/WithourVerticalMenu";
import UserList from "atomic-design/organisms/UserList";
import { ManagerTest, Question, TestService } from "types";

const ManageTest = () => {
  // const { testQuestionUpdate, testTestUpdate, testTestList } = TestService;
  const { testTestUpdate, testTestList } = TestService;
  const { data, isLoading } = useQuery<Array<any>, Error>({
    queryKey: ["testTestList"],
    queryFn: () => testTestList("active"),
  });

  const { mutate } = useMutation({
    // @ts-ignore
    mutationFn: (id: number) => {
      const now = new Date(); // زمان فعلی
      const fiveSecondsLater = new Date(now.getTime() + 5000); // اضافه کردن ۵ ثانیه به زمان فعلی
      const isoString = fiveSecondsLater.toISOString(); // تبدیل به فرمت ISO 8601
      // testQuestionUpdate(id, {
      //   start_datetime: isoString,
      // });
    },
  });

  const { mutate: finishTest, data: testData } = useMutation({
    mutationFn: (id: number) =>
      testTestUpdate(id, {
        status: ManagerTest.status.FINISHED,
      }),
  });

  const handleFinish = (test: any) => {
    finishTest(test.id);
  };

  if (isLoading) return <Spinner />;

  return (
    <WithoutVerticalMenuLayout>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            {data && data.length > 0 ? (
              <>
                <Wating />
                <div className="d-flex justify-content-center">
                  {/* @ts-ignore */}
                  {data?.[0]?.question_set.map((question: Question, index: number) => (
                    <button
                      onClick={() => mutate(question.id as number)}
                      className="btn btn btn-outline-secondary ms-1"
                      key={index}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button onClick={() => handleFinish(data?.[0])} className="btn btn btn-outline-secondary ms-1">
                    پایان آزمون
                  </button>
                </div>

                <div className="card-body">
                  <UserList />
                </div>
              </>
            ) : (
              <div className="misc-wrapper">
                <h1 className="mb-2 mx-2 secondary-font">هیچ آزمونی در حال برگزاری نیست</h1>
                <p className="mb-5 mx-2">
                  در صورت برگزاری آزمون، از طریق ایمیل به شما اطلاع رسانی خواهد شد.
                </p>
                <div className="mt-4">
                  <img
                    src="../../assets/img/illustrations/girl-manage-task-light.png"
                    alt="boy-with-rocket-light"
                    width="500"
                    className="img-fluid"
                    data-app-light-img="illustrations/girl-manage-task-light.png"
                    data-app-dark-img="illustrations/girl-manage-task-dark.png"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </WithoutVerticalMenuLayout>
  );
};

export default ManageTest;
