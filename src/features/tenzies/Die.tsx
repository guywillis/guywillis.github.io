type DieType = {
  value: number;
  isHeld: boolean;
  onClick: () => void;
  isDisabled: boolean;
}

export default function Die({ value, isHeld, onClick, isDisabled }: DieType) {
  const dieClassName =
    `tenzies-dice${isHeld ? ' is-held' : ''}${isDisabled ? ' is-disabled' : ''}`

  return (
    <button
      className={dieClassName}
      dangerouslySetInnerHTML={{ __html: value }}
      onClick={onClick}
      disabled={isDisabled}
    />
  )
}
