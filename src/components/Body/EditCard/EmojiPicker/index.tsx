import { useState } from "react";

import { Popover } from "@headlessui/react";
import { Picker } from "emoji-mart";
import { usePopper } from "react-popper";

import "emoji-mart/css/emoji-mart.css";

function EmojiPicker() {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top-end",
  });
  return (
    <Popover>
      <Popover.Button ref={setReferenceElement} className="text-xl">
        😀
      </Popover.Button>
      <Popover.Panel
        ref={setPopperElement}
        style={{ ...styles.popper, zIndex: 1010 }}
        {...attributes.popper}
      >
        <Picker />
      </Popover.Panel>
    </Popover>
  );
}

export default EmojiPicker;
