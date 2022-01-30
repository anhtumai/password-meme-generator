import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

const FILE_NAME = "password-meme";

function DownloadButton({
  capturedSectionRef,
}: {
  capturedSectionRef: React.RefObject<HTMLDivElement>;
}) {
  async function handleDownload() {
    if (capturedSectionRef.current) {
      const dataUrl = await toPng(capturedSectionRef.current, {});
      console.log(dataUrl);
      saveAs(dataUrl, `${FILE_NAME}.png`);
    }
  }
  return (
    <button
      type="button"
      className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md border bg-blue-600 hover:bg-blue-700"
      onClick={handleDownload}
    >
      <i className="fa fa-download pr-2" aria-hidden="true"></i>
      Download <span>(as png)</span>
    </button>
  );
}

export default DownloadButton;
