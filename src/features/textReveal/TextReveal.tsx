import { useEffect, useRef } from "react";
import type { TextRevealProps, IconShape, HeadingLevel } from "./types";
import { DialogTrigger, ModalOverlay, Modal, Dialog, Button } from "react-aria-components";
import textReveal from './textReveal.json';

function TextReveal(props: TextRevealProps) {
  const {
    items = [],
    itemsPerRowDesktop = 3,
    itemsPerRowTablet = 2,
    itemsPerRowMobile = 1,
    itemGap = 2,
    itemImageHeight = 12,
    itemHorizontalAlignment = "flex-start",
    itemTitleVerticalAlignment = "below",
    itemTitleHorizontalAlignment = "start",
    hoverStyle = "icon",
    iconShape = {
      key: "plus-regular",
      name: "Plus Regular",
      path: [
        448,
        512,
        "M248 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176-176 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0 0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0 0-176z"
      ],
    },
    iconPosition = "center",
    itemImageZoomScale = 1.1,
    itemImageZoomDuration = .2,
    itemImageZoomEasing = "ease-in",
    popupTitleHeadingLevel = "h2",
    popupCloseButtonLabel = "Close",
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  // Checking item title height on render and setting them all to be equal height
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const equalize = () => {
      const titles = Array.from(
        container.querySelectorAll<HTMLElement>(".textreveal__item-title-inner")
      );

      // Reset heights of all titles first
      titles.forEach(t => (t.style.height = "auto"));

      // Measure all titles to find the tallest
      const max = Math.max(...titles.map(t => t.offsetHeight));

      // Apply tallest height to all titles
      titles.forEach(t => (t.style.height = `${max}px`));
    };

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(equalize);
    });

    observer.observe(container);

    // Initial run
    equalize();

    return () => observer.disconnect();
  }, [items]);

  // Render icon from Vev symbol
  const renderIcon = (iconShape: IconShape, position: string) => {
    if (!iconShape || !iconShape.path) return null;
    const [w, h, d] = iconShape.path;

    return (
      <span
        className={`textreveal__item-icon is-${position}`}
        aria-hidden="true"
      >
        <svg
          className="textreveal__item-icon-svg"
          viewBox={`0 0 ${w} ${h}`}
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d={d} />
        </svg>
      </span>
    );
  };

  return (
    <div
      className='textreveal'
      data-testid="textreveal-page"
    >
      <div className='textreveal__inner'>

        <header className='textreveal__header'>
          <div className='textreveal__header-inner'>

            <div className='textreveal__header-title'>
              <h1
                className='textreveal__header-title-inner'
                dangerouslySetInnerHTML={{ __html: textReveal.title }}
                data-testid='textreveal-heading'
              />
            </div>

            <div className='textreveal__header-body'>
              <div
                className='textreveal__header-body-inner'
                dangerouslySetInnerHTML={{ __html: textReveal.body }}
                data-testid='textreveal-body'
              />
            </div>

          </div>
        </header>

        <section className='textreveal__container'>
          <div className='textreveal__container-inner'>

            <div
              ref={containerRef}
              className={`textreveal__root is-hover-style-${hoverStyle}`}
              role="list"
              style={{
                "--textreveal-columns-desktop": itemsPerRowDesktop,
                "--textreveal-columns-tablet": itemsPerRowTablet,
                "--textreveal-columns-mobile": itemsPerRowMobile,
                "--textreveal-item-gap": `${itemGap}rem`,
                "--textreveal-item-image-height": `${itemImageHeight}rem`,
                "--textreveal-item-horizontal-alignment": itemHorizontalAlignment,
                "--textreveal-item-title-horizontal-alignment": itemTitleHorizontalAlignment,
                "--textreveal-item-image-zoom-scale": itemImageZoomScale,
                "--textreveal-item-image-zoom-duration": `${itemImageZoomDuration}s`,
                "--textreveal-item-image-zoom-easing": itemImageZoomEasing,
              } as React.CSSProperties}
            >

              {items.map((item, index) => {
                // Snippet that defines the item title element
                const itemTitleElement = (
                  <span className="textreveal__item-title">
                    <span
                      className="textreveal__item-title-inner"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </span>
                )

                // Helper function that renders a dynamic heading tag depending on heading level defined
                const popupTitleElement = ( popupTitleHeadingLevel: HeadingLevel ) => {
                  const Tag: HeadingLevel = popupTitleHeadingLevel;

                  return (
                    <Tag
                      id="textreveal-modal-title"
                      className="textreveal__modal-title"
                      dangerouslySetInnerHTML={{ __html: item._popup.title }}
                    />
                  );
                };

                // Check if image is present and render the element with position if true
                const hasImage = Boolean(item._popup._img?._src);
                const popupImagePlacement = item._popup.imagePlacement || "right";
                const imageElement = hasImage ? (
                  <div className="textreveal__modal-media-container">
                    <img
                      className="textreveal__modal-media is-image"
                      src={item._popup._img?._src}
                      alt={item._popup._img?.alt}
                      loading="lazy"
                    />
                  </div>
                ) : null;

                return (
                  <div
                    key={index}
                    className="textreveal__item textreveal-item"
                    role="listitem"
                  >

                    <DialogTrigger>
                      <Button
                        className="btn-text textreveal__item-btn textreveal-item-btn"
                        data-testid="item-button"
                      >
                        {itemTitleVerticalAlignment === "hidden" &&
                        <span
                          className="aria-label"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                        }

                        {itemTitleVerticalAlignment === "above" && itemTitleElement}

                        {item._img?._src &&
                        <span className="textreveal__item-image-container textreveal-item-image-container">
                          {hoverStyle === "icon" && iconShape && renderIcon(iconShape, iconPosition)}

                          <img
                            className="textreveal__item-image textreveal-item-image"
                            src={item._img?._src}
                          />
                        </span>
                        }

                        {itemTitleVerticalAlignment === "below" && itemTitleElement}
                      </Button>

                      <ModalOverlay
                        isDismissable
                        className="react-aria-ModalOverlay textreveal__modal-overlay"
                      >

                        <Modal className="react-aria-Modal textreveal__modal">
                          <Dialog className="react-aria-Dialog textreveal__modal-dialog">
                            {popupTitleElement(popupTitleHeadingLevel)}

                            <div
                              className={`textreveal__modal-content${imageElement ? ` is-popup-image-${popupImagePlacement}` : ""}`}
                              tabIndex={0}
                              role="group"
                              aria-labelledby="textreveal-modal-title"
                            >
                              {(popupImagePlacement === "left" || popupImagePlacement === "top") && imageElement}

                              <div className="textreveal__modal-body">
                                <div
                                  className="textreveal__modal-body-inner"
                                  dangerouslySetInnerHTML={{ __html: item._popup.body }}
                                />
                              </div>

                              {(popupImagePlacement === "right" || popupImagePlacement === "bottom") && imageElement}
                            </div>

                            <div className="textreveal__modal-btn-container">
                              <Button
                                slot="close"
                                className="btn-text textreveal__modal-btn"
                              >
                                {popupCloseButtonLabel}
                              </Button>
                            </div>

                          </Dialog>
                        </Modal>
                      </ModalOverlay>
                    </DialogTrigger>

                  </div>
                )
              })}

            </div>

          </div>
        </section>

      </div>
    </div>
  )
}

export default TextReveal;
