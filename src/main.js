import App from "./App.svelte";

// Hot reloading doesn't work with web components, so one way to get around that is to only have it be in web component mode in production, but not in dev

if (process.env.NODE_ENV === "production") {
  const el = document.createElement("axiosvisuals-embed");
  document.body.append(el);

  const shadowRoot = el.attachShadow({ mode: "open" });

  new App({ target: shadowRoot });
} else {
  new App({
    target: document.getElementById("app"),
  });
}
