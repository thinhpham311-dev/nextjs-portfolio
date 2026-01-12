export const Input = (props) => {
  return (
    <div className="w-full">
      <label className="relative block">
        <input
          type={props.type}
          name={props.name}
          onChange={(e) => props.inputChangeHandler(e)}
          className="peer/published h-[50px] w-full rounded-lg border-2 border-white border-opacity-50 bg-transparent px-4 text-sm outline-none transition-all duration-300 focus:border-accent focus:text-white"
        />
        <span
          className={`absolute left-0 mx-2 -translate-y-1/2 scale-75 px-2 text-lg text-white transition-all duration-300 peer-focus/published:left-0 peer-focus/published:top-0 peer-focus/published:rounded-lg peer-focus/published:bg-accent peer-focus/published:text-sm peer-focus/published:text-white peer-focus/published:transition-all peer-focus/published:duration-300 ${props.value && props.value !== "" ? "top-0 rounded-lg bg-accent text-sm text-white" : "top-1/2"}`}
        >
          {props.label}
        </span>
      </label>
    </div>
  )
}

export const InputArea = (props) => {
  return (
    <div className="w-full">
      <label className="relative block">
        <textarea
          name={props.name}
          onChange={(e) => props.inputChangeHandler(e)}
          className="peer/published h-[100px] w-full rounded-lg border-2 border-white border-opacity-50 bg-transparent px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-accent focus:text-white"
        ></textarea>
        <span
          className={`absolute left-0 mx-2 scale-75 px-2 text-lg text-white transition-all duration-300 peer-focus/published:-top-2 peer-focus/published:left-0 peer-focus/published:rounded-lg peer-focus/published:bg-accent peer-focus/published:text-sm peer-focus/published:text-white peer-focus/published:transition-all peer-focus/published:duration-300 ${props.value && props.value !== "" ? "-top-2 rounded-lg bg-accent text-sm text-white" : "top-2"}`}
        >
          {props.label}
        </span>
      </label>
    </div>
  )
}
