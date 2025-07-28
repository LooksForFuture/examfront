
import { useQuery } from "@tanstack/react-query";
import { ApiError, TestService, UserTestResult } from "types";
import Container from "atomic-design/layouts/Container";
import WithoutVerticalMenuLayout from "atomic-design/layouts/WithourVerticalMenu";
import { useParams } from "react-router";
import UserRank from "atomic-design/organisms/UserRank";


const ExamResult = () => {
  const { testId } = useParams();
  const { testResultRead } = TestService;
  const { data, isLoading } = useQuery<Array<UserTestResult>, ApiError>({
    queryKey: ["testResultRead", testId],
    queryFn: async () => {
      if (testId) {
        return testResultRead(testId); // اطمینان حاصل کنید که این تابع یک Promise برمی‌گرداند
      }
      throw new Error("test id is required"); // خطا برای زمانی که testId وجود ندارد
    },
  }); 

  if (isLoading) return <p>loading ...</p>;

  return (
    <>
      <WithoutVerticalMenuLayout>
        <Container>
          <UserRank testResult={data} />
        </Container>
      </WithoutVerticalMenuLayout>
    </>
  );
};

export default ExamResult;