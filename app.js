const pointText = document.getElementById("pointText");
const sourceUrl = document.getElementById("sourceUrl");
const pinButton = document.getElementById("pinButton");

const result = document.getElementById("result");
const pointOutput = document.getElementById("pointOutput");

function createPointId() {
  return `PPP-${Date.now()}`;
}

function createPoint() {
  const text = pointText.value.trim();
  const url = sourceUrl.value.trim();

  if (!text) {
    alert("Add something to pin first.");
    return;
  }

  const point = {
    id: createPointId(),

    type: "POV_POINT",

    content: {
      text: text
    },

    source: {
      url: url || null,
      title: document.title
    },

    capture: {
      timestamp: new Date().toISOString(),
      method: "manual"
    },

    status: "captured",

    routing: {
      universalParser: "pending",
      povNexus: "pending",
      librarySpine: "pending"
    }
  };

  pointOutput.textContent = JSON.stringify(point, null, 2);

  result.classList.remove("hidden");

  console.log("PPP Point created:", point);
}

pinButton.addEventListener("click", createPoint);
