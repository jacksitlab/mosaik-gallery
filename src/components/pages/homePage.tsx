import * as React from 'react';
import * as marked from 'marked';
import * as hljs from 'highlight.js';

const defaultRenderer = new marked.Renderer();
defaultRenderer.link = (href, title, text) => (
    `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${title}">${text}</a>`
);


class HomePage extends React.Component {

    render() {

        const markedOptions: marked.MarkedOptions = {
            gfm: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            langPrefix: 'hljs ',
            ...({}),
            highlight: (code, lang) => {
                if (!!(lang && hljs.getLanguage(lang))) {
                    return hljs.highlight(lang, code).value;
                }
                return code;
            }
        };

        const text = "# Mosaik Editor\n" +
            "\n" +
            "## Objective\n" +
            "\n" +
            "The objective of the project is to create a program with which it is possible to put images into separate mosaiks and organize them on a virtual wall" +
            " and create a printable cut of this. \n";
        const className = "m-2"
        const style: React.CSSProperties = {};


        const html = (marked(text || '', { renderer: markedOptions && markedOptions.renderer || defaultRenderer }));

        return (
            <div
                dangerouslySetInnerHTML={{ __html: html }}
                className={className}
                style={style}
            />

        );
    }
}



export default HomePage;
