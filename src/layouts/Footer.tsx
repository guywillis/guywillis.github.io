import reactStringReplace from "react-string-replace";
import appJson from '../App.json';

export default function Footer() {
  const footerContent = appJson._footer;
  const copyright = footerContent.copyright;

  const date = new Date().getFullYear();
  const copyrightString = reactStringReplace(copyright, 'DATE', () => (date)).join("");

  return (
    <footer className='footer'>
      <div className='footer__inner'>

        <div className='footer__body'>
          <div
            className='footer__body-inner'
            dangerouslySetInnerHTML={{ __html: footerContent.body }}
          />
        </div>

        <div className='footer__copyright'>
          <div
            className='footer__copyright-inner'
            dangerouslySetInnerHTML={{ __html: copyrightString }}
            />
        </div>

        <div className='footer__disclaimer'>
          <div
            className='footer__disclaimer-inner'
            dangerouslySetInnerHTML={{ __html: footerContent.disclaimer }}
          />
        </div>

      </div>
    </footer>
  );
}
