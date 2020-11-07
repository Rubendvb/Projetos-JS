var repositorio = document.querySelector('#repositorio')

fetch('https://api.github.com/users/Rubendvb/repos')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.length)
        var cont = 0 
        for (cont = 0; cont < data.length; cont++)
        {
            repositorio.innerHTML += `
            <div class='card'>
            <a href='${data[cont].html_url}'
            target='_blank'>${data[cont].name}</a>
            </div>`
        }
    })