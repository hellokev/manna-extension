fetch(
    "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json"
  )
    .then((response) => response.json())
    .then((data) => console.log(data.text));