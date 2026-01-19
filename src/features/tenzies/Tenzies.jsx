import Dice from './Dice.jsx'
import tenzies from './tenzies.json'

export default function Tenzies() {
  const content = tenzies._tenzies
  // const items = content._items

  const arr = Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6))
  console.log(arr)

  const buttonElements = arr.map((item, index) => {
    return <Dice key={index} item={item} />
  })

  return (
    <div className='tenzies'>
      <div className='tenzies__inner'>

        <header className='tenzies__header'>
          <div className='tenzies__header-inner'>

            <div className='tenzies__header-title'>
              <h1
                className='tenzies__header-title-inner'
                dangerouslySetInnerHTML={{__html: content.title}}
              />
            </div>

            <div className='tenzies__header-body'>
              <p
                className='tenzies__header-body-inner'
                dangerouslySetInnerHTML={{__html: content.body}}
              />
            </div>

          </div>
        </header>

        <section className='tenzies__container'>
          <div className='tenzies__container-inner'>

            <div className='tenzies__status-container'>
              <div className='tenzies__status-container-inner'>
                'STATUS'
              </div>
            </div>

            <div className='tenzies__dice-container'>
              <div className='tenzies__dice-container-inner'>
                {buttonElements}
              </div>
            </div>

            <div className='tenzies__button-container'>
              <div className='tenzies__button-container-inner'>
                <button className='btn-text tenzies__button'>
                  {content.buttonLabel}
                </button>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}
