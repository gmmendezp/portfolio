import { cssRaw } from 'typestyle'
import { CSS } from '../../../constants'

export default () =>
  cssRaw(`
  .timeline-item {
    position: relative;
    list-style-type: none;
    width: 6px;
    margin: 0 auto;
    padding-top: 50px;
    background: ${CSS.BG_COLOR_MENU};
    color: ${CSS.TEXT_COLOR_SECONDARY};
    letter-spacing: 0.04em;
  }
  .timeline-item::after {
    position: absolute;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
    content: '\\f055';
    font-family: FontAwesome;
    font-size: 1.2em;
    text-align: center;
    line-height: 27px;
    width: 25px;
    height: 27px;
    background: inherit;
    border-radius: 50%;
    padding-left: 1px;
  }
  .timeline-item:nth-child(odd) div {
    left: 45px;
  }
  .timeline-item:nth-child(odd) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent ${CSS.BG_COLOR_MENU} transparent transparent;
  }
  .timeline-item:nth-child(even) div {
      left: -440px;
  }
  .timeline-item:nth-child(even) div::before {
    right: -15px;
    border-width: 8px 0 8px 16px;
    border-color: transparent transparent transparent ${CSS.BG_COLOR_MENU};
  }
  .timeline-item-info {
    position: relative;
    bottom: 0;
    width: 400px;
    padding: 15px;
    background: ${CSS.BG_COLOR_MENU};
    border-radius: 10px;
  }
  .timeline-item-info::before {
    position: absolute;
    content: '';
    bottom: 22px;
    width: 0;
    height: 0;
    border-style: solid;
  }

  @media screen and (max-width: 1200px) {
    .timeline-item:nth-child(even) div {
      left: -390px;
    }
    .timeline-item-info {
      width: 350px;
    }
  }
  @media screen and (max-width: 1000px) {
    .timeline-item:nth-child(even) div {
      left: -290px;
    }
    .timeline-item-info {
      width: 250px;
    }
  }
  @media screen and (max-width: 700px) {
    .timeline-item:nth-child(even) div {
      left: -260px;
    }
    .timeline-item-info {
      width: 220px;
    }
  }
  @media screen and (max-width: 600px) {
    .timeline-item {
      margin-left: 20px;
    }
    .timeline-item:nth-child(even) div::before {
      left: -15px;
      border-width: 8px 16px 8px 0;
      border-color: transparent ${CSS.BG_COLOR_MENU} transparent transparent;
    }
    .timeline-item:nth-child(even) div {
      left: 45px;
    }
    .timeline-item-info {
      calc(90vw - 91px)
    }
  }
`)
