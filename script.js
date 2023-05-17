// Event handler for 'click' events on shapes
function toggle(event) {
    // "event.target" is the shape that was clicked
    event.target.classList.toggle('disabled');
    updateUI();
}

function updateUI() {
    // select all elements with class "shape" but without class "disabled"
    const enabledShapes = document.querySelectorAll(".shape:not(.disabled)");

    updateList(enabledShapes);
    updateLinesDisplay(enabledShapes);
}

// Updates the list of enabled shapes
function updateList(enabledShapes) {
    const listElement = document.getElementById('enabled_shapes');
    // clear list
    listElement.innerHTML = '';
    // repopulate list
    for (const shape of enabledShapes) {
        // create a paragraph and set its content to the shape's "name" attribute
        const p = document.createElement('p');
        p.innerText = shape.getAttribute('name');
        // append it to the list
        listElement.append(p);
    }
}

function updateLinesDisplay(enabledShapes) {
    const enabledShapesIDs = [...enabledShapes].map(elem => elem.id);
    let requiredShapes,shouldBeVisible;

    // make line visible only if heart and square are enabled
    const heart2square = document.getElementById('heart2square_line');
    requiredShapes = ['heart', 'square_0'];
    shouldBeVisible = requiredShapes.every(shape => enabledShapesIDs.includes(shape));
    heart2square.classList.toggle('hidden', !shouldBeVisible);

    // make line visible only if square and circle are enabled
    const square2circle = document.getElementById('square2circle_line');
    requiredShapes = ['square_0', 'circle_0'];
    shouldBeVisible = requiredShapes.every(shape => enabledShapesIDs.includes(shape));
    square2circle.classList.toggle('hidden', !shouldBeVisible);
}

// Add event listener to each shape
const shapes = document.querySelectorAll(".shape"); // select all elements having class "shape"
for (const shape of shapes) {
    shape.addEventListener('click', toggle);
}

updateUI();
