import { toBlob } from "html-to-image";
import React, { useState } from "react";

function CopyClipboardButton({
  capturedSectionRef,
}: {
  capturedSectionRef: React.RefObject<HTMLDivElement>;
}) {
  const [copyCompleted, setCopyCompleted] = useState(false);
  async function handleClipboardCopy() {
    try {
      const pngImageBlob = await toBlob(
        capturedSectionRef.current as HTMLDivElement,
      );
      if (pngImageBlob) {
        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": pngImageBlob,
          }),
        ]);
      }
      setCopyCompleted(true);
    } catch (e) {
      console.error(e);
      setCopyCompleted(false);
    }
  }
  return (
    <button
      type="button"
      className="px-2 py-2.5 focus:outline-none text-white text-sm rounded-md border bg-violet-600 hover:bg-violet-700 w-44"
      onClick={handleClipboardCopy}
      onBlur={() => setCopyCompleted(false)}
    >
      {copyCompleted ? (
        <>
          <i className="fas fa-check pr-2"></i>
          Copied
        </>
      ) : (
        <>
          <i className="fas fa-copy pr-2"></i>
          Copy to clipboard
        </>
      )}
    </button>
  );
}

export default CopyClipboardButton;
