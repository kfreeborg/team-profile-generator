function generatePage(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
  integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  </head>
  
  <body>
  <header>
  <nav class="navbar navbar-light bg-dark">
  <span class="mb-0 text-light h1 mx-auto">Meet the Team</span>
  </nav>
  </header>
  
  <main>
  <div class="container-fluid">
  <div class="row">
  <div class="col-sm mx-auto">
  <div class="card m-3" style="width: 15rem;">
  <div class="card-body border border-dark">
  <div class="bg-warning text-dark">
  <h5 class="card-title">${data.name}</h5>
  <h6 class="card-subtitle mb-2">${data.title}</h6>
  </div>
  <p class="card-text">ID: ${data.id}</p>
  <p class="card-text">Office Number, Github(link), School</p>
  <p class="card-text">Email: ${data.email}</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </main>
  
  </body>
  `
}