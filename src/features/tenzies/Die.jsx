export default function Dice({ value, isHeld, onClick, isDisabled }) {
  let dieClassName =
    `tenzies-dice${isHeld ? ' is-held' : ''}${isDisabled ? ' is-disabled' : ''}`

  return (
    <button
      className={dieClassName}
      dangerouslySetInnerHTML={{ __html: value }}
      onClick={onClick}
      disabled={isDisabled || null}
    />
  )
}
