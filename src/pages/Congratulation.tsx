import { useQuery } from "@tanstack/react-query";
import Container from "atomic-design/layouts/Container";
import WithoutVerticalMenuLayout from "atomic-design/layouts/WithourVerticalMenu";
import TopWinnerCard from "atomic-design/modules/TopWinnerCard";
import WinnerCard from "atomic-design/modules/WinnerCard";
import Confetti from "react-confetti";
import { useParams } from "react-router";
import { useWindowSize } from "react-use";
import { TestService } from "types";

const Congratulation = () => {
  const { testId } = useParams();
  const { width, height } = useWindowSize();
  const { testResultRead } = TestService;
  const { data, isLoading } = useQuery({
    queryKey: ["testResultRead"],
    // @ts-ignore
    queryFn: () => testResultRead(testId),
  });

  if (isLoading) return <p>loading ...</p>;
  
  let first = null
  let second = null
  let third = null
  let others = null

  if (data) {
    if (data.length === 1) {
      first = data[0]
    } else if (data.length === 2) {
      first = data[0]
      second = data[1]
    } else if (data.length === 3) {
      first = data[0]
      second = data[1]
      third = data[2]
    } else if (data.length > 3) {
      first = data[0]
      second = data[1]
      third = data[2]
      others = (data ?? [])?.slice(3);
    }
  }

  return (
    <>
      <Confetti width={width} height={height} />
      <WithoutVerticalMenuLayout>
        <Container>
          <div className="row">
            {first && (
              <div className="col-md-12">
                <TopWinnerCard winner={first} winnerType="first" />
              </div>
            )}
          </div>
          <div className="row">
            {second && (
              <div className="col-md-6">
                <TopWinnerCard winner={second} winnerType="second" />
              </div>
            )}
            {third && (
              <div className="col-md-6">
                <TopWinnerCard winner={third} winnerType="third" />
              </div>
            )}
          </div>

          {others && others.length > 0 && (
            <div className="row d-flex align-items-center justify-content-center">
              {others.map((other: any) => (
                <div className="col-md-4">
                  <WinnerCard winner={other} winnerType="second" />
                </div>
              ))}
            </div>
          )}
        </Container>
      </WithoutVerticalMenuLayout>
    </>
  );
};

export default Congratulation;
