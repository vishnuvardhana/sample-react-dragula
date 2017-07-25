import React from "react";
import classNames from "classnames";
import dragula from 'dragula';
import $ from 'jquery';

const DndClass = React.createClass({
    displayName: "Dnd",
    componentDidMount() {
      /**
       * [options this will be replaced with options sent for dragula later]
       * @type {Object}
       */
      let options = {
        isContainer: function (el) {
                  return false; // only elements in drake.containers will be taken into account
          },
          moves: function (el, source, handle, sibling) {
              return true; // elements are always draggable by default
          },
          accepts: function (el, target, source, sibling) {
              return true; // elements can be dropped in any of the `containers` by default
          },
          invalid: function (el, handle) {
              return false; // don't prevent any drags from initiating by default
          },
          copy: false,                       // elements are moved by default, not copied
          copySortSource: true,             // elements in copy-source containers can be reordered
          revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
          removeOnSpill: false,              // spilling will `.remove` the element, if this is true
          mirrorContainer: document.body,    // set the element that gets mirror elements appended
          allowDraggingContainers: false,    // lets users drag containers themselves as a whole, disabled by default
          ignoreInputTextSelection: true     // allows users to select input text, see details below
      };
        let self = this;
        setTimeout(() => {
            dragula([document.querySelector('.' + self.props.dndClass1), document.querySelector('.' + self.props.dndClass2)],options)
            .on('drag', function (el) {
              var mirrorTop = el.offsetTop + 20;
              el.style.background = '#F0F0F0';
              el.style.opcity = '0.3';
              el.className = el.className.replace('ex-moved', '');
              setTimeout(function(){
                  document.querySelector('.gu-mirror').style.top = mirrorTop+'px';
              })
             }).on('drop', function (el) {
               el.style.background = '#CCC';
               el.style.opcity = '1';
               el.className += ' ex-moved';
             }).on('over', function (el, container) {
               container.className += ' ex-over';
             }).on('out', function (el, container) {
               container.className = container.className.replace('ex-over', '');
             });
        },100)
    },

    render() {

        const {
            dndClass1,
            dndClass2,
            children,
          } = this.props;
        return (
            <span>
                {children}
            </span>
        )
    }
});

export default DndClass;
