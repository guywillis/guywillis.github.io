type DieType = {
  value: number;
  isHeld: boolean;
  onClick: () => void;
  isDisabled: boolean;
  dataTestId: string;
}

export default function Die({ value, isHeld, onClick, isDisabled, dataTestId }: DieType) {
  const dieClassName =
    `tenzies-dice${isHeld ? ' is-held' : ''}${isDisabled ? ' is-disabled' : ''}`

  return (
    <button
      className={dieClassName}
      dangerouslySetInnerHTML={{ __html: value }}
      onClick={onClick}
      disabled={isDisabled}
      data-testid={dataTestId}
    />
  )
}
