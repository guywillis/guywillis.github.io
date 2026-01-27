import { useState, useEffect } from 'react';
// import { useState, useEffect, useRef } from 'react';
import useDeviceSize from '../../hooks/useDeviceSize.jsx'
import Confetti from 'react-confetti'
import Die from './Die.jsx';
import tenzies from './tenzies.json';

export default function Tenzies() {
  // ! To do list
  // * Visual updates
  // * Roll tracker
  // * Accessibility

  const [items, setItems] = useState(() => generateDice());
  const [width, height] = useDeviceSize();
  // const btnRole = useRef(null);

  function generateDice() {
    return Array.from({ length: 10 }, (item, index) => ({
      id: index,
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }))
  }

  console.log('render');

  const gameWon =
    items.every(item => item.isHeld === true) &&
    items.every(item => item.value === items[0].value);

  useEffect(() => {
    console.log('use effect');
    if (gameWon) console.log('use effect game won');
    // if (gameWon) btnRole.current.focus();
  }, [gameWon])

  // Click functions
  function dieClick(id) {
    if (gameWon) return;
    console.log('die click');
    setItems(prev => prev.map(item =>
      item.id === id
        ? {
            ...item,
            isHeld: !item.isHeld
          }
        : item
    ))
  }

  function rollDiceClick() {
    console.log('roll dice');
    setItems(prev => prev.map(item => (
      item.isHeld
        ? item
        : {
          ...item,
          value: Math.ceil(Math.random() * 6),
        }
    )))
  }

  function newGameClick() {
    console.log('new game');
    setItems(prev => prev.map(item => ({
      ...item,
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    })))
  }

  // Class vars
  const rollDiceButtonClassName = `btn-text tenzies__button${gameWon ? ' is-disabled' : ''}`;

  return (
    <div className='tenzies'>
      <div className='tenzies__inner'>

        {gameWon && <Confetti
          width={width}
          height={height}
          recycle={false}
        />}

        <header className='tenzies__header'>
          <div className='tenzies__header-inner'>

            <div className='tenzies__header-title'>
              <h1
                className='tenzies__header-title-inner'
                dangerouslySetInnerHTML={{ __html: tenzies.title }}
              />
            </div>

            <div className='tenzies__header-body'>
              <div
                className='tenzies__header-body-inner'
                dangerouslySetInnerHTML={{ __html: tenzies.body }}
              />
            </div>

          </div>
        </header>

        <section className='tenzies__container'>
          <div className='tenzies__container-inner'>

            <div className='tenzies__status'>
              <div className='tenzies__status-inner'>
                <p>{tenzies.status}
                  {gameWon
                    ? tenzies.won
                    : items.every(item => item.isHeld === true)
                      ? tenzies.invalid
                      : tenzies.notWon
                  }
                </p>
              </div>
            </div>

            <div className='tenzies__dice-container'>
              <div className='tenzies__dice-container-inner'>
                {items.map(item => {
                  return (
                    <Die
                      key={item.id}
                      value={item.value}
                      isHeld={item.isHeld}
                      onClick={() => dieClick(item.id)}
                      isDisabled={gameWon}
                    />
                  )
                })}
              </div>
            </div>

            <div className='tenzies__button-container'>
              <div className='tenzies__button-container-inner'>

                <button
                  disabled={gameWon || null}
                  className={rollDiceButtonClassName}
                  dangerouslySetInnerHTML={{ __html: tenzies.rollDiceButtonLabel }}
                  onClick={() => rollDiceClick()}
                />

                <button
                  className='btn-text tenzies__button'
                  dangerouslySetInnerHTML={{ __html: tenzies.newGameButtonLabel }}
                  onClick={() => newGameClick()}
                />

              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}
