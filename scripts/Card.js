function Card (id) {
	return `<div id="content-div"><p id="card-${id}-content"> here is some content </p>
<p id="card-${id}-more-content"> here is some more content </p></div>



` 
}
 
let test =  Card(1);

console.log(test);