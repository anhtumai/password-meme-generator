import { useState } from "react";

import { Popover } from "@headlessui/react";
import { Picker } from "emoji-mart";
import { usePopper } from "react-popper";

import "emoji-mart/css/emoji-mart.css";

import { BaseEmoji } from "emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index";

function EmojiPicker({
  handleInsertEmoji,
}: {
  handleInsertEmoji: (x: string) => void;
}) {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top-end",
  });

  function handleSelect(emojiData: BaseEmoji) {
    handleInsertEmoji(emojiData.native);
  }
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
        <Picker
          title="Pick your emoji…"
          emoji="point_up"
          onSelect={handleSelect}
        />
      </Popover.Panel>
    </Popover>
  );
}

export default EmojiPicker;
