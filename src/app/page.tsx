import TestCompo from "../components/TestCompo/testCompo"

export default function Root() {
  return (
  <div>
    <TestCompo num={1} />
    <TestCompo num={2} />
  </div>
  )
}
