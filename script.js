console.log('Oh, hello! $BLING$ $BLING$');

$(document).ready(onReady);

function onReady() {

    // register event handler on form's submit button
    // handleSubmit is common name for submit button function
    $('#submit-btn').on('click', handleSubmit);

    $('#to-do-list').on('click', '.delete-button', handleDelete);

}

let toDoCount = 0;

function handleSubmit(event) {
    console.log('submit clicked!');

    // prevent default form button behavior
    // which is an undesirable page refresh
    // have to provide event argument to this function
    event.preventDefault();

    // grab values within inputs
    // .val() is getter of value
    // .val('text') is a setter value
    let toDoInput = $('#to-do-input').val();
    let authorInput = $('#author-input').val();

    console.log('to do:', toDoInput, 'author:', authorInput);

    // append values to the DOM
    // <li>e.g., Yard Work</li>
    $('#to-do-list').append(`
        <li>
            <button class='delete-button'>DELETE!</button>
            ${authorInput} needs to do ${toDoInput}
        </li>`);

    // clear inputs
    $('#to-do-input').val('');
    $('#author-input').val('');

    toDoCount++;
    $('#to-do-count').text(toDoCount);
}

function handleDelete() {
    // delete my to do item from list
    // remove the <li> tag from DOM
    console.log('delete!')
    $(this).parent().remove();
    toDoCount--;
    $('#to-do-count').text(toDoCount);
}
