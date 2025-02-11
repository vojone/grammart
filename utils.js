/**
 * Resizes given image
 * @param img Input image
 * @param width New width
 * @param height New height
 * @returns HTMImageElement with resized image
 */
function resizeImage(img, width, height) {
  let result = new Image();
  let canvas = document.createElement('canvas');
  canvas.height = height;
  canvas.width = width;

  let tmpCanvas = canvas.getContext('2d');
  if(tmpCanvas === null) {
      throw new Error("Error while resizing an image, cannot get a context temporary canvas.");
  }

  tmpCanvas.drawImage(img, 0, 0, width, height);
  result.src = canvas.toDataURL();

  return result;
}

/**
 * Downloads content of canvas specified by its id
 * @param canvasId Id of canvas its content will be downloaded
 * @param name Name of downloaded file without extension
 * @param width Width of downloaded image
 * @param heigth Height of downloaded image
 */
function downloadCanvasContent(canvasId, name, width, height) {
  function downloadImage(image, width, height) {
    let tmpLink = document.createElement('a');
    let resizedImage = resizeImage(image, width, height);
    tmpLink.href = resizedImage.src;
    tmpLink.download = `${name}`;
    tmpLink.click();
  }

  let canvas = document.getElementById(canvasId);
  if(canvas === null) {
    throw new Error(`Unable to find canvas with id: ${canvasId}`);
  }

  let _width;
  let _height;
  if(width === null || height === null) {
    _width = canvas.width;
    _height = canvas.height;
  }
  else {
    _width = width;
    _height = height;
  }

  let img = new Image();
  img.src = canvas.toDataURL();
  img.onload = () => { downloadImage(img, _width, _height); };
}

function downloadText(text, filename = "file.txt") {
  var tmpLink = document.createElement('a');
  tmpLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  tmpLink.download = filename;
  tmpLink.click();
}

function loadTextFileInput(loadTextFn, encoding = "UTF-8") {
  let fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.onchange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file, encoding);
    reader.onload = readerEvent => {
      let content = readerEvent.target.result;
      loadTextFn(content);
    }
  }

  return fileInput;
}

function padZero(num) {
  return num <= 9 ? `0${num}` : `${num}`;
}

function channelsToRGB(channelsArr) {
  return `rgb(${channelsArr[0]} ${channelsArr[1]} ${channelsArr[2]})`
}

function clipSum(lop, rop, lbound, hbound) {
  return Math.min(Math.max(lop + rop, lbound), hbound)
}
