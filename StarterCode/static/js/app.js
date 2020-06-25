
// Fetch the JSON data and console log it
function init(){
  var dropdown = d3.select(#selDataset);

d3.json("data/samples.json").then((data)=> {
  console.log(data)
  // get the id data to the dropdwown menu
  data.names.forEach(function(name) {
    dropdown.append("option").text(name).property("value");
});

// call the functions to display the data and the plots to the page
getPlot(data.names[0]);
getInfo(data.names[0]);
});
}
init();
