interface TestCompoProps {
    num : number
}

export default function TestCompo({ num }: TestCompoProps) {
    return <div>
        <h3>안녕하세요.{num}</h3>
        </div>
}