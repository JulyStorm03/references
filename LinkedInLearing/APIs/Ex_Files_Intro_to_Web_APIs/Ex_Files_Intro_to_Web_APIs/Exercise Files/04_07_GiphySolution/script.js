fetch('https://api.giphy.com/v1/gifs/random?api_key=sx9mONTdDdUXfAio5rL6GkwlYO2QGiXo&tag=programming&rating=g')

	//
	.then(function (kill) {
		return kill.json();

		//
	}).then(function (dill) {
		console.log(dill);
		var gifUrl = dill.data.images.original.url
		console.log(gifUrl)

		//Create gif on page
		var gif = document.createElement('img');
		gif.setAttribute('src', gifUrl);
		document.body.appendChild(gif)

		//Add gif title
		var titleText = dill.data.title;
		var title = document.createElement('h3');
		title.innerText = titleText;
		document.body.appendChild(title);
	})

//in java script, you function() is an attribute like pythons def


