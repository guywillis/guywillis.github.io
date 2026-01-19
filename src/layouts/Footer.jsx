import compile from 'string-template/compile';
import appJson from '../App.json';

export default function Footer() {
  const footerContent = appJson._footer;

  const footerContentCopyright = compile(footerContent.body);
  const date = new Date().getFullYear();
  const body = footerContentCopyright([`${date}` ]);

  return (
    <footer className='footer'>
      <div className='footer__inner'>

        <div className='footer__body'>
          <div
            className='footer__body-inner'
            dangerouslySetInnerHTML={{__html: body}}
          />
        </div>

      </div>
    </footer>
  );
}
