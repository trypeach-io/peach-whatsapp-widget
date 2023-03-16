import { styles, CLOSE_ICON, MESSAGE_ICON } from "./assets.js";

class PeachWhatsAppWidget {
  constructor(config) {
    this.position = this.getPosition(config.position);
    this.open = false;
    this.config = config;
    this.initialize();
    this.injectStyles();
  }

  position = "";
  open = false;
  widgetContainer = null;

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  async initialize() {
    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement("div");
    container.style.position = "fixed";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    /**
     * Create a button element and give it a class of button__container
     */
    const buttonContainer = document.createElement("a");
    buttonContainer.href = this.config.destination;
    buttonContainer.target = "_blank";
    buttonContainer.classList.add("button__container");

    /**
     * Create a span element for the widget icon, give it a class of `widget__icon`, and update its innerHTML property to an icon that would serve as the widget icon.
     */
    const widgetIconElement = document.createElement("span");
    widgetIconElement.innerHTML = MESSAGE_ICON;
    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    buttonContainer.appendChild(this.widgetIcon);

    /**
     * Create a container for the widget and add the following classes:- `widget__hidden`, `widget__container`
     */
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "widget__container");

    /**
     * Invoke the `createWidget()` method
     */
    this.createWidgetContent();

    /**
     * Append the widget's content and the button to the container
     */
    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);
  }

  createWidgetContent() {
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }

}

function merge(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

function initializeWidget() {
  window.PeachWidgetConfig ||= {
  };
  const defaults = {
    position: "bottom-right",
    destination: 'https://wa.me/1234567890?text=Hello'
  };
  const config = merge(window.PeachWidgetConfig, defaults);
  console.log("Initializing widget...", config);
  return new PeachWhatsAppWidget(config);
}

initializeWidget();
