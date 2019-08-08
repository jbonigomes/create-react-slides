# React Impress Like Slides

This is a React app heavily inspired by the known and loved
[Impress.js](https://impress.js.org).

It is a lot less feature rich but let's you create slides as separate React
components leaving the slides author free to be creative.

## Getting started

    npx create-react-slides my-awesome-presentation
    cd my-awesome-presentation
    npm start

## Creating slides

Create a React component under `src/slides` (Samples provided) then add it to
the routes array on `src/routes.js`, note that the order in which components
appear in the array will be the order in which they render in the presentation.

## Slides navigation

Google Chrome is the only supported browser, navigation can be achieved by the
space bar `␣`, right arrow `→` and left arrow `←`.

## Images

Images should be added to the `src/img` folder. They can then be consumed via
the `Img` component. Samples provided in the slides.

## Fonts

You can add fonts via WebFontLoader (Google fonts and the likes), in the
`index.js` file.

## Code hightligthing

Code hightligthing is done via [Prism.js](https://prismjs.com), wrapped via the
`Hightlight` component. By default it will only hightlight Markup, CSS, JS and
C-Like languages. You can however load other languages on
`src/components/Hightlight/index.js`. Samples on usage are included in the
sample slides.
