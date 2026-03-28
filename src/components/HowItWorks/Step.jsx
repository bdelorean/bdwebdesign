import Subtitle from "../Subtitle"
import Caption from "../Caption"
import Text from "../Text"

function Step({ number, title, time, text }) {
  return (
    <div className="flex flex-col gap-2">

      {/* TITLE + NUMĂR */}
      <div className="flex items-center gap-2">
        <span className="text-accent font-bold text-xl">
          {number}.
        </span>

        <Subtitle title={title} />
      </div>

      {/* TIME */}
      <Caption text={`(${time})`} />

      {/* TEXT */}
      <Text text={text} />

    </div>
  )
}

export default Step
