// Create a full CRUD application of your choice using an API or JSON Server.
// Use JQuery/AJAX to interact with the API. 
// Use a form to post new entities.
// Build a way for users to update or delete entities.
// Include a way to get entities from the API.
// Use Bootstrap and CSS to style your project.

//used GET method to display data
const URL_ENDPOINT ='https://64f168df0e1e60602d23c0eb.mockapi.io/votes'

$.get(URL_ENDPOINT).then(votes=>{

    votes.map(votes=>{
        $(`tbody`).append(
            $ (`
        <tr>
            <td>${votes.id}</td>
            <td>${votes.name}</td>
            <td>${votes.age}</td>
            <td>${votes.city}</td>
            <td>
            <button onclick= "deleteArtist(${votes.id})">Delete</button>
            </td>       
        </tr>
        `)
        )
    })
})


// used post method to add new artists
document.getElementById('submit').addEventListener('click',()=>{
  $.post(URL_ENDPOINT,{
      name: $(`#name`).val(),
      age: $(`#age`).val(),
      city: $(`#city`).val()
  })
})

// delete method to delete data
function deleteArtist (id) {
  $.ajax(`${URL_ENDPOINT}/${id}`,{
      method: 'DELETE'
  })
}

//used PUT method to update data
function updateArtist(event){
  event.preventDefault()
  let id = $('#updateID').val()
  $.ajax(`${URL_ENDPOINT}/${id}`, {
      method: 'PUT',
      data: {
          name: $('#updateName').val(),
          age: $('#updateAge').val(),
          city: $('#updateCity').val()
      }
  } )
}
$(`#update`).click(updateArtist)



